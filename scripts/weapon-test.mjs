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
import { Weapon } from "../src/game/Weapon.js";

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

for (const [name, arm] of [
  ["right", weapon.rightArm],
  ["left", weapon.leftArm],
]) {
  const hand = arm.children[arm.children.length - 1];
  expect(Array.isArray(hand.userData.wrist), `${name} hand publishes no wrist anchor`);

  // Measured between the two meshes rather than against the anchor the arm was
  // built from, which both of them agree on whether or not it is right.
  const gap = separation(vertices(arm.children[0]), vertices(hand));
  expect(gap < 0.01 * CONFIG.viewmodel.scale, `${name} forearm stops ${mm(gap)} short of its hand`);

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

// ------------------------------------------------------- string, bolt, channel

weapon.update(1, {});
weapon.group.updateMatrixWorld(true);
expect(weapon.draw === 1, `weapon did not return to full draw, got ${weapon.draw}`);

const serving = new THREE.Vector3();
weapon.serving.getWorldPosition(serving);
// The channel is the bolt group's own origin, which rides the shaft axis; its
// bounding box is widened by the broadhead and the fletching.
const channel = new THREE.Vector3();
weapon.bolt.getWorldPosition(channel);
const boltBox = new THREE.Box3().setFromObject(weapon.bolt);
expect(
  Math.abs(serving.y - channel.y) < 0.01,
  `bowstring sits ${mm(Math.abs(serving.y - channel.y))} off the bolt channel`
);
// The string has to be behind the nock and close to it, or it is pushing air.
expect(serving.z > boltBox.max.z, "bowstring is latched in front of the bolt's nock");
expect(
  serving.z - boltBox.max.z < 0.05,
  `bowstring is latched ${mm(serving.z - boltBox.max.z)} behind the nock it pushes`
);
expect(boltBox.min.z < -0.6 * CONFIG.viewmodel.scale, "the bolt does not reach out past the limbs");

// Each half is a cylinder of unit length along -Z, so its far end is its own
// scale; a slack string shows up here as an end that misses the serving.
for (const { pivot, mesh } of weapon.stringSides) {
  const tip = new THREE.Vector3(0, 0, -mesh.scale.z).applyMatrix4(pivot.matrixWorld);
  expect(tip.distanceTo(serving) < 0.01, `string half stops ${mm(tip.distanceTo(serving))} short of centre`);
}

// ------------------------------------------------------------------- framing

const box = new THREE.Box3().setFromObject(weapon.group);
const { near, far } = CONFIG.viewmodel;
expect(box.max.z < -near, `weapon reaches z=${box.max.z.toFixed(3)}, through the near plane at ${-near}`);
expect(box.min.z > -far, `weapon reaches z=${box.min.z.toFixed(3)}, past the far plane at ${-far}`);

// It must actually be in shot, and it must leave the reticle alone.
const camera = new THREE.PerspectiveCamera(CONFIG.viewmodel.fov, 16 / 9, near, far);
camera.updateMatrixWorld(true);
camera.updateProjectionMatrix();
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
