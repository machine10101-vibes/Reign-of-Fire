/**
 * Headless behaviour checks for the hunt.
 *
 * The renderer on a machine without a GPU manages about one frame a second, so
 * watching the game is a hopeless way to tell whether the AI actually commits,
 * whether bolts kill, or whether two species behave differently. This drives
 * the same simulation at a fixed timestep with no renderer attached.
 */
import * as THREE from "three";

import { SPECIES, SPECIES_ORDER, ATTACK } from "../src/game/species.js";
import { CONFIG } from "../src/game/config.js";
import { Hunt } from "../src/game/Hunt.js";
import { Combat } from "../src/game/Combat.js";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const STEP = 1 / 60;

const textures = {
  pack: () => Object.fromEntries(MAPS.map((m) => [m, { repeat: { set() {} } }])),
  ensure: async () => {},
};

/** A gently sloping ridge is enough for every height query the sim makes. */
const world = {
  heightAt: (x, z) => 4 + Math.sin(x * 0.03) * 3 + Math.cos(z * 0.024) * 2.5,
};

const silence = new Proxy({}, { get: () => () => {} });
const noParticles = new Proxy(
  {},
  {
    get: (_t, key) => (key === "fire" || key === "spark" || key === "chips" ? {} : () => {}),
  }
);

const errors = [];
const expect = (ok, message) => {
  if (!ok) errors.push(message);
};

/**
 * The AI reads the global `Math.random` for spawn angles, patrol drift and its
 * attack roll, so an unseeded run of this harness passes or fails by luck.
 * Every check below therefore runs the same seeds and looks at the spread.
 */
const SEEDS = [1, 2, 3, 4, 5];

function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makePlayer() {
  return {
    position: new THREE.Vector3(0, world.heightAt(0, 0) + 1.7, 0),
    velocity: new THREE.Vector3(),
    health: 100,
    onFire: 0,
    applyDamage(n) {
      this.health = Math.max(0, this.health - n);
    },
    addShake() {},
  };
}

/** Runs one flight to a stop and reports what the beasts actually did. */
function simulate(speciesIds, { seconds = 90, shoot = false, playerHealth = 100, seed = 1 } = {}) {
  const entropy = Math.random;
  Math.random = seeded(seed);
  try {
    return _simulate(speciesIds, { seconds, shoot, playerHealth });
  } finally {
    Math.random = entropy;
  }
}

function _simulate(speciesIds, { seconds, shoot, playerHealth }) {
  const scene = new THREE.Scene();
  const hunt = new Hunt(scene, world, textures, silence);
  const combat = new Combat(scene, world, hunt, noParticles, silence);
  const player = makePlayer();
  player.health = playerHealth;
  const weapon = { bolts: CONFIG.weapon.magazine, max: CONFIG.weapon.magazine, reloading: false };

  hunt.flightLabel = "test";
  for (let i = 0; i < speciesIds.length; i++) hunt._spawn(speciesIds[i], i, speciesIds.length);

  const seen = { states: new Set(), styles: new Set(), breathKinds: new Set() };
  let mortars = 0;
  let damageToPlayer = 0;
  let peakAggression = 0;
  let breathSeconds = 0;
  let aimDot = 0;
  const toPlayer = new THREE.Vector3();
  const aim = new THREE.Vector3();
  const muzzle = new THREE.Vector3();

  for (let t = 0; t < seconds; t += STEP) {
    // Keep the flight alive: this harness only exercises one roster.
    hunt._clearT = 0;
    const before = player.health;
    hunt.update(STEP, player, weapon);
    combat.handleRequests(hunt.drainRequests());
    combat.update(STEP, player);
    damageToPlayer += Math.max(0, before - player.health);

    for (const e of hunt.entries) {
      seen.states.add(e.ai.state);
      if (e.ai.attackStyle) seen.styles.add(e.ai.attackStyle);
      if (e.ai.breath.active) seen.breathKinds.add(e.ai.breath.kind);
      peakAggression = Math.max(peakAggression, e.ai.aggressionNow);
      // How well the lit flame is actually pointed at the hunter, which is the
      // quantity the damage cone tests and the particles are drawn along.
      if (e.ai.breath.active) {
        toPlayer.subVectors(player.position, e.dragon.mouthWorld(muzzle));
        if (toPlayer.length() <= e.spec.stats.attackRange) {
          breathSeconds += STEP;
          aimDot += e.ai.breath.aim.dot(toPlayer.normalize()) * STEP;
        }
      }
    }
    mortars = Math.max(mortars, combat.mortars?.length ?? 0);

    if (shoot && hunt.alive.length) {
      const target = hunt.alive[0].dragon;
      const box = target.hitboxes[0];
      box.getWorldPosition(aim);
      muzzle.copy(player.position);
      aim.sub(muzzle).normalize();
      combat.fire(muzzle, aim);
      weapon.bolts = weapon.max;
    }
  }

  return {
    hunt,
    player,
    seen,
    mortars,
    damageToPlayer,
    peakAggression,
    breathSeconds,
    breathAim: breathSeconds > 0 ? aimDot / breathSeconds : 1,
  };
}

const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;

// Every species has to commit to an attack and reach the hunter, on every seed
// rather than on a lucky one.
for (const id of SPECIES_ORDER) {
  const spec = SPECIES[id];
  for (const seed of SEEDS) {
    const { seen, damageToPlayer, breathSeconds, breathAim } = simulate([id], { seconds: 120, seed });
    expect(seen.states.has("attack"), `${id} (seed ${seed}): never committed to an attack in two minutes`);
    expect(
      seen.styles.size > 0 && [...seen.styles].every((s) => spec.mind.attacks.includes(s)),
      `${id} (seed ${seed}): used an attack style outside its own repertoire (${[...seen.styles].join(", ")})`
    );
    expect(damageToPlayer > 0, `${id} (seed ${seed}): never managed to hurt the hunter`);
    // A lit flame has to be pointed at the hunter. This caught a bursting
    // attack spraying past the player for a third of the fight, which no
    // amount of damage-total watching would have localised.
    expect(
      breathSeconds < 1 || breathAim > 0.7,
      `${id} (seed ${seed}): breathed at the hunter for ${breathSeconds.toFixed(1)}s while aimed ` +
        `an average of ${((Math.acos(Math.min(1, breathAim)) * 180) / Math.PI).toFixed(0)}° off them`
    );
    if (spec.mind.breath === "venom") {
      expect(
        !seen.breathKinds.size || seen.breathKinds.has("venom"),
        `${id} (seed ${seed}): breathes fire despite a venom spec`
      );
    }
  }
}

// Aggression has to show up as behaviour, not just a number in the table.
{
  const timid = mean(SEEDS.map((seed) => simulate(["emberkin"], { seconds: 60, seed }).damageToPlayer));
  const berserk = mean(SEEDS.map((seed) => simulate(["cinderwyrm"], { seconds: 60, seed }).damageToPlayer));
  expect(
    berserk > timid,
    `a 0.95-aggression Cinderwyrm did no more damage than a 0.28-aggression Emberkin ` +
      `(${berserk.toFixed(0)} vs ${timid.toFixed(0)} mean over ${SEEDS.length} seeds)`
  );
}

// A wounded coward must break off the moment it is hurt; the fearless must not.
// Nerve recovering with distance afterwards is deliberate, so only the
// immediate reaction is checked here.
for (const [id, shouldRun] of [
  ["emberkin", true],
  ["cinderwyrm", false],
]) {
  for (const seed of SEEDS) {
    const { hunt } = simulate([id], { seconds: 8, seed });
    const entry = hunt.entries[0];
    entry.dragon.takeDamage(entry.dragon.maxHp * 0.75, "body");
    entry.ai.notifyHit("body");
    const ran = entry.ai.state === "flee";
    expect(
      ran === shouldRun,
      `${id} (seed ${seed}) at ${(entry.dragon.hpFraction * 100).toFixed(0)}% health went to ` +
        `"${entry.ai.state}" but fleeAt is ${SPECIES[id].mind.fleeAt}`
    );
  }
}

// Bolts have to actually kill, and a kill has to score.
for (const seed of SEEDS) {
  const { hunt } = simulate(["emberkin"], { seconds: 60, shoot: true, seed });
  expect(hunt.kills.length > 0, `seed ${seed}: sustained fire on the head never killed an Emberkin`);
  expect(
    hunt.bounty >= SPECIES.emberkin.bounty,
    `seed ${seed}: a kill did not pay its bounty (${hunt.bounty})`
  );
}

// A pack hunter has to be measurably braver with company, and the extra nerve
// has to come from `packMinded` rather than from there simply being more of
// them: zeroing the weight must collapse the pack's aggression to the lone
// figure.
for (const id of SPECIES_ORDER.filter((s) => SPECIES[s].mind.packMinded)) {
  const runs = (ids) => SEEDS.map((seed) => simulate(ids, { seconds: 60, playerHealth: 1e9, seed }));
  const alone = runs([id]);
  const pack = runs([id, id, id]);

  const weight = SPECIES[id].mind.packMinded;
  SPECIES[id].mind.packMinded = 0;
  const unbound = runs([id, id, id]);
  SPECIES[id].mind.packMinded = weight;

  for (let i = 0; i < SEEDS.length; i++) {
    expect(
      pack[i].peakAggression > alone[i].peakAggression + 0.1,
      `${id} (seed ${SEEDS[i]}): a pack of three peaked at ${pack[i].peakAggression.toFixed(2)} ` +
        `aggression, barely above a lone beast's ${alone[i].peakAggression.toFixed(2)}`
    );
    expect(
      Math.abs(unbound[i].peakAggression - alone[i].peakAggression) < 0.01,
      `${id} (seed ${SEEDS[i]}): numbers alone changed its aggression ` +
        `(${unbound[i].peakAggression.toFixed(2)} vs ${alone[i].peakAggression.toFixed(2)}), so ` +
        `this is not measuring packMinded`
    );
  }
  // Damage from three beasts swings hard seed to seed, so the pressure claim is
  // only made about the average.
  const bolder = mean(pack.map((r) => r.damageToPlayer));
  const timid = mean(unbound.map((r) => r.damageToPlayer));
  expect(
    bolder > timid,
    `${id}: pack nerve did not translate into pressure on the hunter ` +
      `(${bolder.toFixed(0)} vs ${timid.toFixed(0)} mean with the weight off)`
  );
}

// The mortar species must actually put shells in the air.
{
  const mortarSpecies = SPECIES_ORDER.find((id) => SPECIES[id].mind.attacks.includes(ATTACK.LAVA_MORTAR));
  for (const seed of SEEDS) {
    const { mortars } = simulate([mortarSpecies], { seconds: 120, seed });
    expect(mortars > 0, `${mortarSpecies} (seed ${seed}): never launched a lava mortar`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(e);
  console.error(`hunt test failed: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(
  `Hunt test passed — ${SPECIES_ORDER.length} species engaged, attacked and died ` +
    `across ${SEEDS.length} seeds.`
);
