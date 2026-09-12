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
function simulate(speciesIds, { seconds = 90, shoot = false, playerHealth = 100 } = {}) {
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

  return { hunt, player, seen, mortars, damageToPlayer };
}

// Every species has to be able to commit to an attack and reach the hunter.
for (const id of SPECIES_ORDER) {
  const spec = SPECIES[id];
  const { seen, damageToPlayer } = simulate([id], { seconds: 120 });
  expect(seen.states.has("attack"), `${id}: never committed to an attack in two minutes`);
  expect(
    seen.styles.size > 0 && [...seen.styles].every((s) => spec.mind.attacks.includes(s)),
    `${id}: used an attack style outside its own repertoire (${[...seen.styles].join(", ")})`
  );
  expect(damageToPlayer > 0, `${id}: never managed to hurt the hunter`);
  if (spec.mind.breath === "venom") {
    expect(
      !seen.breathKinds.size || seen.breathKinds.has("venom"),
      `${id}: breathes fire despite a venom spec`
    );
  }
}

// Aggression has to show up as behaviour, not just a number in the table.
{
  const timid = simulate(["emberkin"], { seconds: 60 });
  const berserk = simulate(["cinderwyrm"], { seconds: 60 });
  expect(
    berserk.damageToPlayer > timid.damageToPlayer,
    `a 0.95-aggression Cinderwyrm did no more damage than a 0.28-aggression Emberkin ` +
      `(${berserk.damageToPlayer.toFixed(0)} vs ${timid.damageToPlayer.toFixed(0)})`
  );
}

// A wounded coward must break off the moment it is hurt; the fearless must not.
// Nerve recovering with distance afterwards is deliberate, so only the
// immediate reaction is checked here.
for (const [id, shouldRun] of [
  ["emberkin", true],
  ["cinderwyrm", false],
]) {
  const { hunt } = simulate([id], { seconds: 8 });
  const entry = hunt.entries[0];
  entry.dragon.takeDamage(entry.dragon.maxHp * 0.75, "body");
  entry.ai.notifyHit("body");
  const ran = entry.ai.state === "flee";
  expect(
    ran === shouldRun,
    `${id} at ${(entry.dragon.hpFraction * 100).toFixed(0)}% health went to "${entry.ai.state}" ` +
      `but fleeAt is ${SPECIES[id].mind.fleeAt}`
  );
}

// Bolts have to actually kill, and a kill has to score.
{
  const { hunt } = simulate(["emberkin"], { seconds: 60, shoot: true });
  expect(hunt.kills.length > 0, "sustained fire on the head never killed an Emberkin");
  expect(hunt.bounty >= SPECIES.emberkin.bounty, `a kill did not pay its bounty (${hunt.bounty})`);
}

// The mortar species must actually put shells in the air.
{
  const mortarSpecies = SPECIES_ORDER.find((id) => SPECIES[id].mind.attacks.includes(ATTACK.LAVA_MORTAR));
  const { mortars } = simulate([mortarSpecies], { seconds: 120 });
  expect(mortars > 0, `${mortarSpecies} never launched a lava mortar`);
}

if (errors.length) {
  for (const e of errors) console.error(e);
  console.error(`hunt test failed: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`Hunt test passed — ${SPECIES_ORDER.length} species engaged, attacked and died.`);
