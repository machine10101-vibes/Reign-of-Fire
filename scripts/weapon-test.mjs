/**
 * Headless checks for the first-person weapon.
 *
 * Every assertion here stands in for a defect that shipped and could not be
 * seen in code review: parts culled out of existence by a flag set before they
 * were built, forearms ending in mid air because the hands were moved onto new
 * grips and their coordinates were written down in two places, a bowstring
 * running below the channel the bolt sits in, and a model long enough to push
 * through the near plane of its own camera.
 */
import * as THREE from "three";

import { CONFIG } from "../src/game/config.js";
import { Weapon, sweep } from "../src/game/Weapon.js";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];

/** Texture stand-ins: the weapon only ever calls repeat.set on them. */
const textures = {
  pack() {
    return Object.fromEntries(MAPS.map((m) => [m, { repeat: { set() {} } }]));
  },
};

const errors = [];
const expect = (ok, message) => {
  if (!ok) errors.push(message);
};
const mm = (v) => `${(v * 1000).toFixed(1)}mm`;

/**
 * The viewmodel stand-in. Its root sits at the origin with no rotation, which
 * is exactly where the real one sits: the viewmodel camera *is* the space the
 * weapon is authored in.
 */
function stubViewmodel() {
  return {
    root: new THREE.Group(),
    flashes: 0,
    flash() {
      this.flashes++;
    },
    update() {},
    toWorld(point, out) {
      return out.copy(point);
    },
  };
}

// ------------------------------------------------------------- swept geometry

// A straight tube is convex, so every face of it should point away from its
// own centre. The first version of the winding was inverted, and with backface
// culling that meant every limb, forearm and finger was being seen from the
// inside — which on a tube a centimetre across reads as open guttering.
{
  const tube = sweep(
    [
      [0, 0, 0],
      [0, 0, -0.2],
      [0, 0, -0.4],
    ],
    { steps: 6, radial: 8, radius: () => 0.05 }
  );
  tube.computeBoundingBox();
  const mid = tube.boundingBox.getCenter(new THREE.Vector3());
  const pos = tube.attributes.position;
  const [a, b, c] = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  let inward = 0;
  for (let i = 0; i < tube.index.count; i += 3) {
    a.fromBufferAttribute(pos, tube.index.getX(i));
    b.fromBufferAttribute(pos, tube.index.getX(i + 1));
    c.fromBufferAttribute(pos, tube.index.getX(i + 2));
    const normal = b.clone().sub(a).cross(c.clone().sub(a));
    const outward = a.clone().add(b).add(c).divideScalar(3).sub(mid);
    if (normal.dot(outward) <= 0) inward++;
  }
  expect(inward === 0, `${inward} of ${tube.index.count / 3} swept faces are inside out`);
}

const viewmodel = stubViewmodel();
const weapon = new Weapon(viewmodel, textures);
weapon.group.updateMatrixWorld(true);

// ----------------------------------------------------------------- the build

const meshes = [];
weapon.group.traverse((o) => {
  if (o.isMesh) meshes.push(o);
});
expect(meshes.length > 24, `weapon built only ${meshes.length} meshes`);

// The flag that once left the entire weapon invisible: the traverse that clears
// it used to run on an empty group.
const culled = meshes.filter((m) => m.frustumCulled);
expect(
  culled.length === 0,
  `${culled.length} of ${meshes.length} weapon meshes are still frustum culled`
);

const shadowed = meshes.filter((m) => m.castShadow || m.receiveShadow);
expect(shadowed.length === 0, `${shadowed.length} viewmodel meshes still cast or receive shadows`);

// -------------------------------------------------------------- hands on grips

/** Every vertex of a subtree, in world space. */
function vertices(object) {
  const out = [];
  object.updateMatrixWorld(true);
  object.traverse((o) => {
    if (!o.isMesh) return;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      out.push(new THREE.Vector3().fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld));
    }
  });
  return out;
}

/** How far apart two sets of geometry are at their closest point. */
function separation(a, b) {
  let best = Infinity;
  for (const p of a) for (const q of b) best = Math.min(best, p.distanceToSquared(q));
  return Math.sqrt(best);
}

// The viewmodel's own lens, for the framing checks. The weapon is authored in
// camera space, so an identity camera is the player's eye.
const camera = new THREE.PerspectiveCamera(
  CONFIG.viewmodel.fov,
  16 / 9,
  CONFIG.viewmodel.near,
  CONFIG.viewmodel.far
);
camera.updateMatrixWorld(true);
camera.updateProjectionMatrix();

for (const [name, arm, side] of [
  ["right", weapon.rightArm, 1],
  ["left", weapon.leftArm, -1],
]) {
  const hand = arm.children[arm.children.length - 1];
  expect(Array.isArray(hand.userData.wrist), `${name} hand publishes no wrist anchor`);

  // Measured between the two meshes rather than against the anchor the arm was
  // built from, which both of them agree on whether or not it is right.
  const gap = separation(vertices(arm.children[0]), vertices(hand));
  expect(gap < 0.01 * CONFIG.viewmodel.scale, `${name} forearm stops ${mm(gap)} short of its hand`);

  // A forearm has a length. The first pair were half a metre and three
  // quarters of a metre long, which is why they read as scaffolding poles.
  const elbow = new THREE.Vector3(...arm.userData.elbow).applyMatrix4(arm.matrixWorld);
  const joint = new THREE.Vector3(...hand.userData.wrist).applyMatrix4(hand.matrixWorld);
  const reach = elbow.distanceTo(joint) / CONFIG.viewmodel.scale;
  expect(reach > 0.25 && reach < 0.4, `${name} arm is ${mm(reach)} long`);

  // The elbow belongs off the bottom of the frame; an arm that ends inside it
  // ends in a stump.
  const seen = elbow.clone().project(camera);
  expect(seen.y < -1 || seen.x * side > 1, `${name} elbow is inside the frame at ${seen.y.toFixed(2)}`);

  // A hand whose fingers were stacked upside down met all of the above, so the
  // index knuckle has to be demonstrably at the top of the handle and the
  // wrist below it, where the arm comes up from.
  const wrist = new THREE.Vector3(...hand.userData.wrist).applyMatrix4(hand.matrixWorld);
  const index = new THREE.Vector3(...hand.userData.knuckle).applyMatrix4(hand.matrixWorld);
  expect(
    index.y > wrist.y + 0.05 * CONFIG.viewmodel.scale,
    `${name} hand has its wrist ${mm(index.y - wrist.y)} above its index knuckle`
  );

  // And the hand has to be on the handle, not floating beside it.
  const grip = name === "right" ? weapon.grip : weapon.foregrip;
  const handle = new THREE.Vector3();
  grip.getWorldPosition(handle);
  const palm = new THREE.Vector3();
  hand.getWorldPosition(palm);
  expect(
    palm.distanceTo(handle) < 0.05 * CONFIG.viewmodel.scale,
    `${name} hand sits ${mm(palm.distanceTo(handle))} from the handle it holds`
  );
}

// The trigger finger is built from the trigger's real position, so it has to
// land on it: a finger reaching a remembered offset is how the first version
// ended up with a blade sticking ten centimetres out of the front of the hand.
{
  const trigger = new THREE.Vector3();
  weapon.trigger.getWorldPosition(trigger);
  const reach = separation(vertices(weapon.triggerFinger), [trigger]);
  expect(reach < 0.02, `the index finger stops ${mm(reach)} from the trigger`);
}

// ------------------------------------------------------- string, bolt, channel

weapon.update(1, {});
weapon.group.updateMatrixWorld(true);
expect(weapon.draw === 1, `weapon did not return to full draw, got ${weapon.draw}`);

// Measured in the weapon's own frame. "Level with the channel" is a statement
// about the weapon, and once it is pitched nose-down in the hand two points at
// different range no longer share a height in camera space.
const local = (object) => object.position.clone();
const serving = local(weapon.serving);
const channel = local(weapon.bolt);
expect(
  Math.abs(serving.y - channel.y) < 0.01,
  `bowstring sits ${mm(Math.abs(serving.y - channel.y))} off the bolt channel`
);
// The bolt group's origin rides the shaft axis; its extent is what says where
// the nock and the broadhead are.
const boltBox = new THREE.Box3()
  .setFromObject(weapon.bolt)
  .applyMatrix4(new THREE.Matrix4().copy(weapon.group.matrixWorld).invert());
// The string has to be behind the nock and close to it, or it is pushing air.
expect(serving.z > boltBox.max.z, "bowstring is latched in front of the bolt's nock");
expect(
  serving.z - boltBox.max.z < 0.05,
  `bowstring is latched ${mm(serving.z - boltBox.max.z)} behind the nock it pushes`
);
expect(boltBox.min.z < -0.6, "the bolt does not reach out past the limbs");

// Each half is a cylinder of unit length along -Z, so its far end is its own
// scale; a slack string shows up here as an end that misses the serving.
for (const { pivot, mesh } of weapon.stringSides) {
  pivot.updateMatrix();
  const tip = new THREE.Vector3(0, 0, -mesh.scale.z).applyMatrix4(pivot.matrix);
  expect(tip.distanceTo(serving) < 0.01, `string half stops ${mm(tip.distanceTo(serving))} short of centre`);
}

// ------------------------------------------------------------------- framing

const box = new THREE.Box3().setFromObject(weapon.group);
const { near, far } = CONFIG.viewmodel;
expect(box.max.z < -near, `weapon reaches z=${box.max.z.toFixed(3)}, through the near plane at ${-near}`);
expect(box.min.z > -far, `weapon reaches z=${box.min.z.toFixed(3)}, past the far plane at ${-far}`);

// It must actually be in shot.
const ndc = new THREE.Box2();
const corner = new THREE.Vector3();
for (let i = 0; i < 8; i++) {
  corner.set(
    i & 1 ? box.max.x : box.min.x,
    i & 2 ? box.max.y : box.min.y,
    i & 4 ? box.max.z : box.min.z
  );
  corner.project(camera);
  ndc.expandByPoint(new THREE.Vector2(corner.x, corner.y));
}
expect(ndc.min.x < 1 && ndc.max.x > -1 && ndc.min.y < 1 && ndc.max.y > -1, "weapon is off screen");
// Held at the hip on the right: the bulk of it belongs below and right of centre.
expect(ndc.min.y < -0.2, `weapon does not reach the bottom of the frame, lowest y=${ndc.min.y.toFixed(2)}`);
expect(ndc.max.x > 0.1, `weapon does not reach the right of the frame, highest x=${ndc.max.x.toFixed(2)}`);
// And nothing of it over the reticle, which is the one part of the screen the
// player is actually looking at.
expect(ndc.max.y < 0.06, `weapon reaches the reticle, highest y=${ndc.max.y.toFixed(2)}`);

/** Where a point in the weapon's own frame lands, as a fraction down the frame. */
const down = (x, y, z) => {
  const ndc = new THREE.Vector3(x, y, z).applyMatrix4(weapon.group.matrixWorld).project(camera);
  return (1 - ndc.y) / 2;
};
// Both hands in shot. The whole reason for rebuilding them is that they were
// below the bottom edge and the player could not see them at all.
for (const [name, arm] of [
  ["rear", weapon.rightArm],
  ["front", weapon.leftArm],
]) {
  const hand = arm.children[arm.children.length - 1];
  const seen = new THREE.Vector3().setFromMatrixPosition(hand.matrixWorld).project(camera);
  const fraction = (1 - seen.y) / 2;
  expect(fraction > 0.55 && fraction < 0.94, `${name} hand is ${fraction.toFixed(2)} down the frame`);
  expect(Math.abs(seen.x) < 0.95, `${name} hand is off the side of the frame`);
}
// The prod clear of the reticle but not off the bottom, and both limb tips in
// shot: a crossbow seen end-on is indistinguishable from a rifle.
expect(down(0, 0.044, -0.45) > 0.56, "the prod crosses the reticle");
for (const side of [-1, 1]) {
  const tip = new THREE.Vector3(side * 0.335, 0.044, -0.452)
    .applyMatrix4(weapon.group.matrixWorld)
    .project(camera);
  expect(Math.abs(tip.x) < 0.94, `the ${side < 0 ? "left" : "right"} limb tip is out of shot`);
}

// ------------------------------------------------------------ firing and reload

expect(weapon.bolts === CONFIG.weapon.bolts, "weapon did not start loaded");
expect(weapon.tryFire(), "loaded weapon refused to fire");
expect(weapon.bolts === CONFIG.weapon.bolts - 1, "firing did not spend a bolt");
expect(weapon.recoil > 0 && weapon.kick > 0, "firing produced no recoil");
expect(viewmodel.flashes === 1, "firing did not light the muzzle flash");
expect(!weapon.tryFire(), "weapon fired again inside its own cooldown");

const muzzle = new THREE.Vector3();
weapon.muzzleWorld(muzzle);
expect(muzzle.z < -0.4, `muzzle is at z=${muzzle.z.toFixed(3)}, not out in front of the eye`);
expect(Math.abs(muzzle.x) < 0.4 && Math.abs(muzzle.y) < 0.4, "muzzle is nowhere near the sight line");

// Empty the quiver, then check a dry trigger answers and a reload refills.
for (let i = 0; i < 200 && weapon.bolts > 0; i++) {
  weapon.update(1 / 30, {});
  weapon.tryFire();
}
expect(weapon.empty, "could not empty the quiver");
// Long enough for the cooldown from the last shot to lapse, so the trigger
// pull that follows is refused for being empty and not for being early.
weapon.update(CONFIG.weapon.cooldown + 0.1, {});
expect(!weapon.tryFire(), "empty weapon still fired");
expect(weapon.dry > 0, "dry trigger gave no feedback");

expect(weapon.tryReload(), "empty weapon refused to reload");
expect(!weapon.tryReload(), "reload restarted while already reloading");
let winding = 0;
let boltSeatedEarly = false;
for (let i = 0; i < 400 && weapon.reloading; i++) {
  weapon.update(1 / 60, {});
  if (weapon.reloadProgress > 0.05 && weapon.reloadProgress < 0.5) {
    winding = Math.max(winding, weapon.crankSpin);
    if (weapon.bolt.visible) boltSeatedEarly = true;
  }
}
expect(!weapon.reloading, "reload never finished");
expect(weapon.bolts === weapon.max, "reload did not refill the quiver");
expect(winding > 0, "the windlass never turned during the reload");
expect(!boltSeatedEarly, "a bolt was seated before the string was latched");
weapon.update(1, {});
expect(weapon.bolt.visible, "no bolt on the rail after reloading");

// -------------------------------------------------------------------- handling

const { swayMax } = CONFIG.viewmodel;
weapon.update(1, { turnRate: { x: 0, y: 0 } });
const centred = weapon.group.position.x;
for (let i = 0; i < 30; i++) weapon.update(1 / 60, { moving: true, turnRate: { x: 9, y: 0 } });
expect(weapon.group.position.x !== centred, "the weapon does not sway when the hunter turns");
expect(Math.abs(weapon._sway.x) <= swayMax + 1e-6, `sway of ${weapon._sway.x} exceeds its clamp`);
for (let i = 0; i < 200; i++) weapon.update(1 / 60, { turnRate: { x: 0, y: 0 } });
expect(Math.abs(weapon._sway.x) < 1e-3, "the weapon never settles back onto the aim");

const level = weapon.group.position.y;
for (let i = 0; i < 60; i++) weapon.update(1 / 60, { moving: true, sprinting: true, turnRate: null });
expect(weapon.group.position.y < level - 0.03, "the weapon is not dropped out of the aim at a sprint");

weapon.dispose();

if (errors.length) {
  console.error(`Weapon test failed:\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log(
  `Weapon test passed — ${meshes.length} parts, both hands on the grips, ` +
    `${CONFIG.weapon.bolts} bolts fired and wound back.`
);
