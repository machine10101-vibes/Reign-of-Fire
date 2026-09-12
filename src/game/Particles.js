import * as THREE from "three";
import { CONFIG } from "./config.js";

function makePoints(count, size, color, opacity = 1) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const life = new Float32Array(count);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: true,
  });
  const points = new THREE.Points(geo, mat);
  return { points, pos, life, vel: new Float32Array(count * 3), count };
}

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.ash = makePoints(CONFIG.quality.particleAsh, 0.18, 0x6a5b50, 0.55);
    this.ember = makePoints(CONFIG.quality.particleEmber, 0.12, 0xff6a18, 0.9);
    this.fire = makePoints(280, 0.45, 0xff3a00, 0.95);
    this.blood = makePoints(160, 0.14, 0x6a0508, 0.95);
    this.blood.points.material.blending = THREE.NormalBlending;
    this.chips = makePoints(120, 0.1, 0x1a1a1a, 1);
    this.chips.points.material.blending = THREE.NormalBlending;
    for (const sys of [this.ash, this.ember, this.fire, this.blood, this.chips]) {
      scene.add(sys.points);
    }
    this._seedAsh();
    this.tmp = new THREE.Vector3();
  }

  _seedAsh() {
    for (let i = 0; i < this.ash.count; i++) {
      this.ash.pos[i * 3] = (Math.random() - 0.5) * 220;
      this.ash.pos[i * 3 + 1] = Math.random() * 90;
      this.ash.pos[i * 3 + 2] = (Math.random() - 0.5) * 220;
      this.ash.vel[i * 3] = (Math.random() - 0.5) * 1.4;
      this.ash.vel[i * 3 + 1] = -1.4 - Math.random();
      this.ash.vel[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
      this.ash.life[i] = Math.random();
    }
    for (let i = 0; i < this.ember.count; i++) {
      this.ember.pos[i * 3] = (Math.random() - 0.5) * 160;
      this.ember.pos[i * 3 + 1] = Math.random() * 18;
      this.ember.pos[i * 3 + 2] = (Math.random() - 0.5) * 160;
      this.ember.vel[i * 3 + 1] = 1.5 + Math.random() * 2.5;
      this.ember.life[i] = Math.random();
    }
  }

  burst(sys, origin, dir, n, speed, spread) {
    let spawned = 0;
    for (let i = 0; i < sys.count && spawned < n; i++) {
      if (sys.life[i] > 0.05) continue;
      sys.pos[i * 3] = origin.x;
      sys.pos[i * 3 + 1] = origin.y;
      sys.pos[i * 3 + 2] = origin.z;
      sys.vel[i * 3] = dir.x * speed + (Math.random() - 0.5) * spread;
      sys.vel[i * 3 + 1] = dir.y * speed + (Math.random() - 0.5) * spread;
      sys.vel[i * 3 + 2] = dir.z * speed + (Math.random() - 0.5) * spread;
      sys.life[i] = 1;
      spawned++;
    }
  }

  fireBreath(origin, target) {
    this.tmp.copy(target).sub(origin).normalize();
    this.burst(this.fire, origin, this.tmp, 48, 18, 6);
  }

  bloodHit(origin, normal) {
    this.burst(this.blood, origin, normal, 22, 6, 5);
    this.burst(this.chips, origin, normal, 14, 5, 4);
    this.burst(this.ember, origin, normal, 10, 4, 3);
  }

  update(dt) {
    this._step(this.ash, dt, 0, 90, true);
    this._step(this.ember, dt, 0.4, 28, true);
    this._step(this.fire, dt, -2.2, 80, false);
    this._step(this.blood, dt, -12, 40, false);
    this._step(this.chips, dt, -10, 30, false);
  }

  _step(sys, dt, gravity, resetY, recycle) {
    const p = sys.pos;
    const v = sys.vel;
    for (let i = 0; i < sys.count; i++) {
      const i3 = i * 3;
      if (!recycle && sys.life[i] <= 0) continue;
      v[i3 + 1] += gravity * dt;
      p[i3] += v[i3] * dt;
      p[i3 + 1] += v[i3 + 1] * dt;
      p[i3 + 2] += v[i3 + 2] * dt;
      sys.life[i] -= dt * (recycle ? 0.02 : 0.85);
      if (recycle && (p[i3 + 1] < 0 || sys.life[i] <= 0)) {
        p[i3] = (Math.random() - 0.5) * 220;
        p[i3 + 1] = resetY;
        p[i3 + 2] = (Math.random() - 0.5) * 220;
        sys.life[i] = 1;
      }
    }
    sys.points.geometry.attributes.position.needsUpdate = true;
  }

  setQuality(tier) {
    this.ash.points.visible = true;
    this.ember.points.visible = tier !== "low";
    this.ash.points.material.size = tier === "low" ? 0.28 : 0.18;
  }
}
