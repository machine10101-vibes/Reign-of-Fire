/**
 * Headless rig checks for the procedural dragon.
 *
 * These exist because the wing flap silently animated the one axis that leaves
 * a Z-extending limb exactly where it was, which is invisible in code review
 * and easy to misjudge from a screenshot of a dark scene.
 */
import * as THREE from "three";

import { SPECIES, SPECIES_ORDER } from "../src/game/species.js";
import { Dragon } from "../src/game/Dragon.js";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];

/** Texture stand-ins: the rig only ever calls repeat.set on them. */
const textures = {
  pack() {
    return Object.fromEntries(MAPS.map((m) => [m, { repeat: { set() {} } }]));
  },
};

const errors = [];
const expect = (ok, message) => {
  if (!ok) errors.push(message);
};

function wingMembrane(dragon, index) {
  // Walked rather than taken as a direct child: the sail now lives on the
  // elbow, because a membrane parented to the shoulder cannot fold with it.
  let found = null;
  dragon.bones.wings[index].traverse((c) => {
    if (c.userData.hit?.name === "wing") found = c;
  });
  return found;
}

function wingTipWorld(dragon, index) {
  const membrane = wingMembrane(dragon, index);
  const pos = membrane.geometry.attributes.position;
  let best = null;
  let bestZ = -Infinity;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    if (Math.abs(v.z) > bestZ) {
      bestZ = Math.abs(v.z);
      best = v.clone();
    }
  }
  dragon.root.updateMatrixWorld(true);
  return best.applyMatrix4(membrane.matrixWorld);
}

const pose = { flap: 1, jaw: 0.1, pitch: 0, roll: 0, grounded: false, charge: 0 };

for (const id of SPECIES_ORDER) {
  const spec = SPECIES[id];
  const dragon = new Dragon(spec, textures);
  dragon.anim = 0;

  expect(dragon.bones.wings.length === 2, `${id}: expected two wings`);
  expect(dragon.bones.elbows?.length === 2, `${id}: wings have no elbows`);
  expect(dragon.bones.wrists?.length === 2, `${id}: wings have no wrists`);
  expect(dragon.bones.knees?.length === 4, `${id}: legs have no knees`);
  expect(dragon.bones.tail.length === spec.build.tailSegments, `${id}: tail segment count does not match spec`);
  expect(dragon.bones.neck.length >= 2, `${id}: neck should be at least two segments`);
  expect(dragon.hitboxes.length > 0, `${id}: no hitboxes`);
  expect(
    dragon.hitboxes[0].userData.hit.name === "head",
    `${id}: head must be the first hitbox tested or the torso sphere swallows it`
  );
  expect(dragon.maxHp === spec.stats.hp, `${id}: hp not taken from spec`);
  expect(Math.abs(dragon.root.scale.x - spec.build.scale) < 1e-6, `${id}: body scale not taken from spec`);

  // Sample a full flap cycle and require the wing tip to actually travel.
  const period = (Math.PI * 2) / dragon.flapRate;
  let minY = Infinity;
  let maxY = -Infinity;
  const tips = [];
  for (let step = 0; step < 12; step++) {
    dragon.anim = (step / 12) * period;
    dragon.update(1 / 60, pose);
    const tip = wingTipWorld(dragon, 0);
    tips.push(tip);
    minY = Math.min(minY, tip.y);
    maxY = Math.max(maxY, tip.y);
  }
  const travel = maxY - minY;
  expect(travel > spec.build.scale * 0.15, `${id}: wing tip only travels ${travel.toFixed(2)} over a full flap cycle`);

  // Both wings must move together, not one up and one down.
  dragon.anim = period * 0.25;
  dragon.update(1 / 60, pose);
  const left = wingTipWorld(dragon, 0);
  const right = wingTipWorld(dragon, 1);
  expect(
    Math.abs(left.y - right.y) < spec.build.scale * 0.08,
    `${id}: wings are out of phase (left y ${left.y.toFixed(2)}, right y ${right.y.toFixed(2)})`
  );

  // The upstroke has to fold the elbow more than the downstroke. A flap that
  // never changes the wing's shape is the door-swing the first rig shipped.
  dragon.anim = 0;
  dragon.update(1 / 60, { ...pose, flap: 1 });
  const upFold = Math.abs(dragon.bones.elbows[0].rotation.y);
  dragon.anim = period / 2 - 1 / 60;
  dragon.update(1 / 60, { ...pose, flap: 1 });
  const downFold = Math.abs(dragon.bones.elbows[0].rotation.y);
  expect(upFold > downFold * 1.4, `${id}: elbow folds as much on the downstroke (${downFold.toFixed(2)}) as the upstroke (${upFold.toFixed(2)})`);

  // The head has to pitch at the hunter. Damped, so give it a second.
  const looking = new Dragon(spec, textures);
  looking.update(1, { ...pose, lookPitch: 0.7, flap: 0 });
  const headUp = looking.bones.head.rotation.z;
  looking.update(1, { ...pose, lookPitch: -0.7, flap: 0 });
  const headDown = looking.bones.head.rotation.z;
  expect(headUp > headDown + 0.08, `${id}: head does not pitch toward a look target`);
  looking.dispose();

  // A glide holds the wings out instead of folding them. The Pale Stalker's
  // silent pass is flap 0.12, and if that still folded the sail it would
  // silhouette as a stoop rather than a hold.
  const gliding = new Dragon(spec, textures);
  gliding.anim = 0;
  gliding.update(1 / 60, { ...pose, flap: 0.1 });
  const glideFold = Math.abs(gliding.bones.elbows[0].rotation.y);
  gliding.anim = 0;
  gliding.update(1 / 60, { ...pose, flap: 1 });
  const powerFold = Math.abs(gliding.bones.elbows[0].rotation.y);
  expect(glideFold < powerFold, `${id}: a glide still folds the wing (${glideFold.toFixed(2)} vs ${powerFold.toFixed(2)})`);
  gliding.dispose();

  // Headshots must be worth more than body shots after armour.
  const head = new Dragon(spec, textures);
  const body = new Dragon(spec, textures);
  const headDealt = head.takeDamage(100, "head");
  const bodyDealt = body.takeDamage(100, "body");
  expect(headDealt >= bodyDealt, `${id}: armour soaks more from the skull than the body`);
}

if (errors.length) {
  for (const e of errors) console.error(e);
  console.error(`rig test failed: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`Rig test passed — ${SPECIES_ORDER.length} species built, flapped and shot.`);
