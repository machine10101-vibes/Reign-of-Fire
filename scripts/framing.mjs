/**
 * Where the viewmodel lands on screen, for a given rest pose.
 *
 * Picking a first-person pose by taking screenshots is slow and, on a machine
 * rendering WebGL in software at one frame a second, slower still. The weapon
 * is authored in camera space, so the only thing a screenshot was telling me
 * was the projection of a handful of landmarks — which is arithmetic.
 *
 * Run with no arguments to report the committed pose, or pass
 * `y=-0.04 rx=-0.26` and so on to try one.
 */
import * as THREE from "three";

import { CONFIG } from "../src/game/config.js";
import { Weapon } from "../src/game/Weapon.js";

const MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const textures = { pack: () => Object.fromEntries(MAPS.map((m) => [m, { repeat: { set() {} } }])) };
const viewmodel = { root: new THREE.Group(), flash() {}, update() {}, toWorld: (p, o) => o.copy(p) };

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.split("=");
    return [k, Number(v)];
  })
);

const weapon = new Weapon(viewmodel, textures);
if (args.scale) weapon.group.scale.setScalar(args.scale);
weapon._restPos.set(
  args.x ?? weapon._restPos.x,
  args.y ?? weapon._restPos.y,
  args.z ?? weapon._restPos.z
);
weapon._restRot.set(
  args.rx ?? weapon._restRot.x,
  args.ry ?? weapon._restRot.y,
  args.rz ?? weapon._restRot.z
);
weapon.group.position.copy(weapon._restPos);
weapon.group.rotation.copy(weapon._restRot);
weapon.group.updateMatrixWorld(true);

const camera = new THREE.PerspectiveCamera(CONFIG.viewmodel.fov, 16 / 9, CONFIG.viewmodel.near, CONFIG.viewmodel.far);
camera.updateMatrixWorld(true);
camera.updateProjectionMatrix();

/** NDC, plus the fraction across and down the frame that a viewer would name. */
function frame(point) {
  const ndc = point.clone().project(camera);
  return {
    across: +((ndc.x + 1) / 2).toFixed(3),
    down: +((1 - ndc.y) / 2).toFixed(3),
    metres: +(-point.z).toFixed(3),
  };
}

const local = (x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(weapon.group.matrixWorld);
const of = (object, offset) => {
  const v = new THREE.Vector3(...(offset ?? [0, 0, 0]));
  object.updateMatrixWorld(true);
  return v.applyMatrix4(object.matrixWorld);
};

const rearHand = weapon.rightArm.children[weapon.rightArm.children.length - 1];
const frontHand = weapon.leftArm.children[weapon.leftArm.children.length - 1];

const landmarks = {
  butt: local(0, -0.006, 0.311),
  receiver: local(0, 0.048, 0),
  prod: local(0, 0.044, -0.45),
  muzzle: local(0, 0.048, -0.74),
  limbTipLeft: local(-0.335, 0.044, -0.452),
  limbTipRight: local(0.335, 0.044, -0.452),
  rearSight: local(0, 0.084, -0.03),
  rearHand: of(rearHand),
  frontHand: of(frontHand),
  rightElbow: of(weapon.rightArm, weapon.rightArm.userData.elbow),
  leftElbow: of(weapon.leftArm, weapon.leftArm.userData.elbow),
};

const box = new THREE.Box3().setFromObject(weapon.group);
const corners = [];
for (let i = 0; i < 8; i++) {
  corners.push(
    new THREE.Vector3(
      i & 1 ? box.max.x : box.min.x,
      i & 2 ? box.max.y : box.min.y,
      i & 4 ? box.max.z : box.min.z
    )
  );
}

console.log(
  `pose  pos ${weapon._restPos.toArray().map((n) => n.toFixed(3)).join(" ")}  ` +
    `rot ${weapon._restRot.toArray().slice(0, 3).map((n) => n.toFixed(3)).join(" ")}  ` +
    `scale ${weapon.group.scale.x.toFixed(3)}`
);
for (const [name, point] of Object.entries(landmarks)) {
  const f = frame(point);
  console.log(
    `${name.padEnd(13)} across ${String(f.across).padStart(6)}  down ${String(f.down).padStart(6)}  ` +
      `${String(f.metres).padStart(6)}m`
  );
}
const tops = corners.map((c) => frame(c).down);
console.log(`silhouette    highest ${Math.min(...tops).toFixed(3)}  lowest ${Math.max(...tops).toFixed(3)}`);
