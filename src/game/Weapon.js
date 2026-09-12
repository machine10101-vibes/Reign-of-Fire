import * as THREE from "three";
import { CONFIG } from "./config.js";
import { standardFrom, setRepeat } from "./assets.js";

export class Weapon {
  constructor(camera, textures) {
    this.group = new THREE.Group();
    this.camera = camera;
    this.bolts = CONFIG.weapon.bolts;
    this.max = CONFIG.weapon.bolts;
    this.cooldown = 0;
    this.reloadT = 0;
    this.recoil = 0;
    this.kick = 0;
    this._build(textures);
    this.camera.add(this.group);
    const fill = new THREE.PointLight(0xffc8a0, 1.4, 4, 1);
    fill.position.set(0.05, 0.15, 0.25);
    camera.add(fill);
  }

  get reloading() {
    return this.reloadT > 0;
  }

  _build(textures) {
    const metal = standardFrom(setRepeat(textures.pack("weapon_metal", { clone: true }), 2, 2), {
      metalness: 0.9,
      roughness: 0.3,
      envMapIntensity: 1.25,
    });
    const wood = standardFrom(setRepeat(textures.pack("weapon_wood", { clone: true }), 1, 3), {
      metalness: 0.02,
      roughness: 0.82,
      envMapIntensity: 0.4,
    });
    const leather = standardFrom(setRepeat(textures.pack("leather_glove", { clone: true }), 3, 3), {
      metalness: 0,
      roughness: 0.72,
      envMapIntensity: 0.35,
    });

    this.group.position.set(0.22, -0.32, -0.62);
    this.group.rotation.set(0.02, 0.02, 0);
    this.group.scale.setScalar(1.45);
    this.group.traverse((o) => {
      o.frustumCulled = false;
      o.renderOrder = 10;
    });

    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.12, 0.62), metal);
    this.group.add(receiver);
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.22, 12), leather);
    wrap.rotation.x = Math.PI / 2;
    wrap.position.set(0, -0.01, 0.12);
    this.group.add(wrap);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.14, 0.32), wood);
    stock.position.set(0, -0.02, 0.42);
    stock.rotation.x = 0.15;
    this.group.add(stock);
    const prod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.7, 10), wood);
    prod.rotation.z = Math.PI / 2;
    prod.position.set(0, 0.02, -0.12);
    this.group.add(prod);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.5, 10), metal);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0, -0.28);
    this.group.add(barrel);

    const cableMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, metalness: 0.9, roughness: 0.4 });
    for (const side of [-1, 1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.34 * side, 0.02, -0.12),
        new THREE.Vector3(0.12 * side, 0.01, -0.22),
        new THREE.Vector3(0, 0, -0.32),
      ]);
      const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.006, 5, false), cableMat);
      this.group.add(cable);
    }

    const sightR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.03), metal);
    sightR.position.set(0, 0.1, 0.08);
    this.group.add(sightR);
    const sightF = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.07, 0.02), metal);
    sightF.position.set(0, 0.09, -0.34);
    this.group.add(sightF);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.004, 8, 16), metal);
    ring.position.set(0, 0.14, 0.08);
    this.group.add(ring);

    this.bolt = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 8), metal);
    shaft.rotation.x = Math.PI / 2;
    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.02, 0.1, 6),
      new THREE.MeshStandardMaterial({ color: 0x8a8a8a, metalness: 0.95, roughness: 0.25 })
    );
    tip.rotation.x = -Math.PI / 2;
    tip.position.z = -0.26;
    this.bolt.add(shaft, tip);
    this.bolt.position.set(0, 0, -0.18);
    this.group.add(this.bolt);

    this.leftHand = this._hand(leather);
    this.leftHand.position.set(-0.16, -0.06, -0.08);
    this.leftHand.rotation.set(0.4, 0.2, 0.5);
    this.group.add(this.leftHand);
    this.rightHand = this._hand(leather);
    this.rightHand.position.set(0.05, -0.08, 0.18);
    this.rightHand.rotation.set(0.2, 0, -0.2);
    this.group.add(this.rightHand);
  }

  _hand(mat) {
    const g = new THREE.Group();
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.035, 0.1), mat);
    g.add(palm);
    for (let i = 0; i < 4; i++) {
      const finger = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.022, 0.07), mat);
      finger.position.set(-0.03 + i * 0.02, 0.01, -0.07);
      g.add(finger);
    }
    return g;
  }

  muzzleWorld(out) {
    const p = this.bolt.position.clone();
    p.z -= 0.4;
    this.group.localToWorld(p);
    out.copy(p);
    return out;
  }

  tryFire() {
    if (this.reloading || this.cooldown > 0 || this.bolts <= 0) return false;
    this.bolts -= 1;
    this.cooldown = CONFIG.weapon.cooldown;
    this.recoil = CONFIG.weapon.recoil;
    this.kick = 1;
    this.bolt.visible = false;
    return true;
  }

  tryReload() {
    if (this.reloading || this.bolts === this.max) return false;
    this.reloadT = CONFIG.weapon.reload;
    return true;
  }

  update(dt, moving, aimingHot) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      this.group.position.y = -0.42;
      this.group.rotation.x = 0.35;
      if (this.reloadT <= 0) {
        this.bolts = this.max;
        this.bolt.visible = true;
      }
      return;
    }
    if (this.cooldown < CONFIG.weapon.cooldown * 0.45) this.bolt.visible = this.bolts > 0;
    this.kick = THREE.MathUtils.damp(this.kick, 0, 8, dt);
    this.recoil = THREE.MathUtils.damp(this.recoil, 0, 10, dt);
    const bob = Math.sin(performance.now() * 0.008) * (moving ? 0.018 : 0.004);
    this.group.position.set(0.22, -0.32 + bob - this.kick * 0.05, -0.62 + this.kick * 0.06);
    this.group.rotation.set(0.02 + this.recoil, 0.04, this.kick * 0.04);
    if (aimingHot) this.group.position.x = 0.16;
  }
}
