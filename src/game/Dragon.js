import * as THREE from "three";
import { CONFIG } from "./config.js";
import { standardFrom } from "./assets.js";

function boneMesh(geo, mat, cast = true) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

export class Dragon {
  constructor(textures) {
    this.maxHp = CONFIG.dragon.hp;
    this.hp = this.maxHp;
    this.alive = true;
    this.root = new THREE.Group();
    this.root.scale.setScalar(CONFIG.dragon.bodyScale);
    this.bones = {};
    this.hitboxes = [];
    this.anim = 0;
    this.pain = 0;
    this.jaw = 0;
    this._build(textures);
  }

  _mat(textures) {
    const body = standardFrom(textures.dragon_scales, {
      metalness: 0.22,
      roughness: 0.42,
      emissive: new THREE.Color(1.15, 0.18, 0.03),
      emissiveIntensity: 2.4,
      normalScale: new THREE.Vector2(1.6, 1.6),
    });
    textures.dragon_scales.albedo.repeat.set(3.5, 2.2);
    textures.dragon_scales.normal.repeat.set(3.5, 2.2);
    textures.dragon_scales.emissive.repeat.set(3.5, 2.2);
    textures.dragon_wing.albedo.repeat.set(2.4, 2.4);
    const wing = standardFrom(textures.dragon_wing, {
      metalness: 0.06,
      roughness: 0.55,
      emissive: new THREE.Color(0.8, 0.08, 0.02),
      emissiveIntensity: 0.85,
      side: THREE.DoubleSide,
    });
    this.materials = { body, wing };
    return { body, wing };
  }

  _addHit(name, mesh, multiplier) {
    mesh.userData.hit = { name, multiplier, dragon: this };
    this.hitboxes.push(mesh);
  }

  _build(textures) {
    const { body, wing } = this._mat(textures);

    const chest = new THREE.Group();
    chest.add(boneMesh(new THREE.SphereGeometry(0.95, 18, 14), body));
    const torso = boneMesh(new THREE.CylinderGeometry(0.72, 0.95, 2.4, 14), body);
    torso.rotation.z = Math.PI / 2;
    torso.position.x = -1.15;
    chest.add(torso);
    this.root.add(chest);
    this.bones.chest = chest;
    this._addHit("body", chest.children[0], 1);

    const neckA = new THREE.Group();
    neckA.position.set(0.85, 0.15, 0);
    neckA.add(boneMesh(new THREE.CylinderGeometry(0.38, 0.55, 1.15, 12), body));
    neckA.children[0].rotation.z = Math.PI / 2;
    neckA.children[0].position.x = 0.5;
    chest.add(neckA);
    this.bones.neckA = neckA;

    const neckB = new THREE.Group();
    neckB.position.set(1.1, 0.08, 0);
    neckB.add(boneMesh(new THREE.CylinderGeometry(0.28, 0.4, 1.0, 12), body));
    neckB.children[0].rotation.z = Math.PI / 2;
    neckB.children[0].position.x = 0.45;
    neckA.add(neckB);
    this.bones.neckB = neckB;

    const head = new THREE.Group();
    head.position.set(1.05, 0.05, 0);
    const skull = boneMesh(new THREE.SphereGeometry(0.42, 14, 12), body);
    skull.scale.set(1.45, 0.85, 0.78);
    head.add(skull);
    const snout = boneMesh(new THREE.ConeGeometry(0.22, 0.7, 10), body);
    snout.rotation.z = -Math.PI / 2;
    snout.position.x = 0.62;
    head.add(snout);
    this.jawBone = new THREE.Group();
    this.jawBone.position.set(0.2, -0.12, 0);
    const jawMesh = boneMesh(new THREE.BoxGeometry(0.7, 0.12, 0.34), body);
    jawMesh.position.x = 0.35;
    this.jawBone.add(jawMesh);
    head.add(this.jawBone);
    for (const side of [-1, 1]) {
      const horn = boneMesh(new THREE.ConeGeometry(0.07, 0.7, 6), body);
      horn.position.set(-0.05, 0.38, 0.16 * side);
      horn.rotation.z = 0.45;
      head.add(horn);
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff2a00 })
      );
      eye.position.set(0.28, 0.12, 0.22 * side);
      head.add(eye);
    }
    neckB.add(head);
    this.bones.head = head;
    this._addHit("head", skull, 3.0);
    this.mouth = new THREE.Object3D();
    this.mouth.position.set(0.85, -0.02, 0);
    head.add(this.mouth);

    let tailParent = chest;
    let tPos = -1.9;
    this.bones.tail = [];
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group();
      g.position.set(tPos, -0.05 * i, 0);
      const r = 0.55 - i * 0.09;
      const seg = boneMesh(new THREE.CylinderGeometry(r * 0.65, r, 1.05, 10), body);
      seg.rotation.z = Math.PI / 2;
      seg.position.x = -0.45;
      g.add(seg);
      const spike = boneMesh(new THREE.ConeGeometry(0.08, 0.35, 5), body);
      spike.position.set(-0.2, 0.42, 0);
      g.add(spike);
      tailParent.add(g);
      this.bones.tail.push(g);
      this._addHit("tail", seg, 0.7);
      tailParent = g;
      tPos = -0.95;
    }

    this.bones.wings = [];
    for (const side of [-1, 1]) {
      const wingRoot = new THREE.Group();
      wingRoot.position.set(0.15, 0.4, 0.62 * side);
      chest.add(wingRoot);

      const upper = boneMesh(new THREE.CylinderGeometry(0.08, 0.16, 3.2, 8), body);
      upper.rotation.x = Math.PI / 2;
      upper.position.set(-0.2, 0.1, 1.5 * side);
      wingRoot.add(upper);

      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(2.6, 0.35 * side);
      shape.lineTo(4.1, 0.1 * side);
      shape.lineTo(3.2, -1.3 * side);
      shape.lineTo(1.1, -1.05 * side);
      shape.lineTo(0.15, -0.25 * side);
      const membrane = boneMesh(new THREE.ShapeGeometry(shape), wing);
      membrane.rotation.y = -Math.PI / 2;
      membrane.rotation.z = side * 0.08;
      membrane.position.set(-0.4, -0.15, 0.35 * side);
      wingRoot.add(membrane);

      const finger = boneMesh(new THREE.CylinderGeometry(0.04, 0.07, 3.4, 6), body);
      finger.rotation.x = Math.PI / 2;
      finger.rotation.y = -0.35 * side;
      finger.position.set(-1.1, -0.15, 2.0 * side);
      wingRoot.add(finger);
      this.bones.wings.push(wingRoot);
      this._addHit("wing", membrane, 0.55);
    }

    for (const [x, z] of [
      [0.7, 0.45],
      [0.7, -0.45],
      [-1.3, 0.4],
      [-1.3, -0.4],
    ]) {
      const leg = boneMesh(new THREE.CylinderGeometry(0.12, 0.2, 1.1, 8), body);
      leg.position.set(x, -0.85, z);
      const claw = boneMesh(new THREE.ConeGeometry(0.08, 0.28, 5), body);
      claw.position.set(0, -0.65, 0);
      claw.rotation.x = Math.PI;
      leg.add(claw);
      chest.add(leg);
    }

    this.root.rotation.y = Math.PI / 2;
    const glow = new THREE.PointLight(0xff4a12, 22, 48, 1.4);
    this.root.add(glow);
    this.glow = glow;
  }

  mouthWorld(target = new THREE.Vector3()) {
    this.mouth.getWorldPosition(target);
    return target;
  }

  takeDamage(amount, part = "body") {
    if (!this.alive) return 0;
    const dealt = Math.max(1, amount);
    this.hp = Math.max(0, this.hp - dealt);
    this.pain = 0.55;
    if (this.hp <= 0) {
      this.alive = false;
    }
    return dealt;
  }

  update(dt, pose) {
    this.anim += dt;
    const flap = Math.sin(this.anim * 3.4) * 0.42;
    this.bones.wings[0].rotation.z = flap;
    this.bones.wings[1].rotation.z = flap;
    this.bones.neckA.rotation.z = Math.sin(this.anim * 1.4) * 0.08;
    this.bones.neckB.rotation.z = Math.sin(this.anim * 1.4 + 0.4) * 0.1;
    this.bones.tail.forEach((seg, i) => {
      seg.rotation.y = Math.sin(this.anim * 2.1 + i * 0.7) * 0.18;
      seg.rotation.z = Math.cos(this.anim * 1.6 + i) * 0.05;
    });
    this.pain = Math.max(0, this.pain - dt);
    this.jaw = THREE.MathUtils.damp(this.jaw, pose.jaw ?? 0, 6, dt);
    this.jawBone.rotation.z = this.jaw;
    this.materials.body.emissiveIntensity = 2.8 + Math.sin(this.anim * 2.2) * 0.7 + this.pain * 2;
    if (this.glow) this.glow.intensity = 18 + Math.sin(this.anim * 2.2) * 6;

    if (pose.dead) {
      this.root.rotation.x = THREE.MathUtils.damp(this.root.rotation.x, 1.05, 2.2, dt);
    } else {
      this.root.rotation.x = THREE.MathUtils.damp(this.root.rotation.x, pose.pitch ?? 0, 4, dt);
    }
  }
}
