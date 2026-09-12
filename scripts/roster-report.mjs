/**
 * Prints what each species actually does over a fixed simulated hunt, so the
 * aggression and attack-style numbers in the table can be checked against
 * behaviour instead of taken on faith.
 */
import * as THREE from "three";

import { SPECIES, SPECIES_ORDER } from "../src/game/species.js";
import { CONFIG } from "../src/game/config.js";
import { Hunt } from "../src/game/Hunt.js";
import { Combat } from "../src/game/Combat.js";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const STEP = 1 / 60;
const SECONDS = Number(process.argv[2] ?? 90);

const textures = { pack: () => Object.fromEntries(MAPS.map((m) => [m, { repeat: { set() {} } }])) };
const world = { heightAt: (x, z) => 4 + Math.sin(x * 0.03) * 3 + Math.cos(z * 0.024) * 2.5 };
const silence = new Proxy({}, { get: () => () => {} });
const noParticles = new Proxy({}, { get: (_t, k) => (["fire", "spark", "chips"].includes(k) ? {} : () => {}) });

function run(id) {
  const scene = new THREE.Scene();
  const hunt = new Hunt(scene, world, textures, silence);
  const combat = new Combat(scene, world, hunt, noParticles, silence);
  const player = {
    position: new THREE.Vector3(0, world.heightAt(0, 0) + 1.7, 0),
    velocity: new THREE.Vector3(),
    health: 1e9,
    onFire: 0,
    applyDamage(n) { this.health -= n; },
    addShake() {},
  };
  const weapon = { bolts: CONFIG.weapon.magazine, max: CONFIG.weapon.magazine, reloading: false };
  hunt._spawn(id, 0, 1);
  const e = hunt.entries[0];

  const time = {};
  let damage = 0;
  let commits = 0;
  let breathT = 0;
  let closest = Infinity;
  let distSum = 0;
  let frames = 0;
  let lastStyle = null;

  for (let t = 0; t < SECONDS; t += STEP) {
    hunt._clearT = 0;
    const before = player.health;
    hunt.update(STEP, player, weapon);
    combat.handleRequests(hunt.drainRequests());
    combat.update(STEP, player);
    damage += Math.max(0, before - player.health);

    time[e.ai.state] = (time[e.ai.state] ?? 0) + STEP;
    if (e.ai.attackStyle && e.ai.attackStyle !== lastStyle) commits++;
    lastStyle = e.ai.attackStyle;
    if (e.ai.breath.active) breathT += STEP;
    const d = e.dragon.root.position.distanceTo(player.position);
    closest = Math.min(closest, d);
    distSum += d;
    frames++;
  }

  return {
    id,
    aggression: SPECIES[id].mind.aggression,
    commits,
    damage: Math.round(damage),
    breath: +breathT.toFixed(1),
    engaged: +((SECONDS - (time.patrol ?? 0)) / SECONDS).toFixed(2),
    closest: Math.round(closest),
    meanDist: Math.round(distSum / frames),
  };
}

const rows = SPECIES_ORDER.map(run).sort((a, b) => a.aggression - b.aggression);
const cols = ["id", "aggression", "engaged", "commits", "breath", "damage", "closest", "meanDist"];
console.log(cols.map((c) => c.padEnd(12)).join(""));
for (const r of rows) console.log(cols.map((c) => String(r[c]).padEnd(12)).join(""));
