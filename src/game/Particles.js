import * as THREE from "three";
import { CONFIG } from "./config.js";

const PARKED = -9999;

/**
 * Soft radial sprite. Square point splats read as artefacts at these sizes, but
 * a clean gaussian reads as a blurry circle once a splat fills the frame, so
 * soft holes are punched through it to break up the falloff.
 */
function softSprite() {
  const size = 96;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.7)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  ctx.globalCompositeOperation = "destination-out";
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + Math.random();
    const r = size * (0.1 + Math.random() * 0.28);
    const x = size / 2 + Math.cos(a) * size * 0.22;
    const y = size / 2 + Math.sin(a) * size * 0.22;
    const hole = ctx.createRadialGradient(x, y, 0, x, y, r);
    hole.addColorStop(0, "rgba(0,0,0,0.3)");
    hole.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = hole;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makePoints(count, size, color, opacity, sprite, blending) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const life = new Float32Array(count);
  for (let i = 0; i < count; i++) pos[i * 3 + 1] = PARKED;
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
  const mat = new THREE.PointsMaterial({
    color,
    size,
    map: sprite,
    transparent: true,
    opacity,
    depthWrite: false,
    blending,
    fog: true,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { points, pos, life, vel: new Float32Array(count * 3), count };
}

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.sprite = softSprite();
    const add = THREE.AdditiveBlending;
    const normal = THREE.NormalBlending;
    this.ash = makePoints(CONFIG.quality.particleAsh, 0.3, 0x6a5b50, 0.4, this.sprite, normal);
    this.ember = makePoints(CONFIG.quality.particleEmber, 0.16, 0xff6a18, 0.9, this.sprite, add);
    this.fire = makePoints(420, 0.55, 0xff4a08, 0.4, this.sprite, add);
    this.venom = makePoints(320, 0.7, 0x9fe020, 0.3, this.sprite, add);
    // Impact sparks need their own pool; the ambient ember field is always full.
    this.spark = makePoints(260, 0.2, 0xffaa30, 1, this.sprite, add);
    this.blood = makePoints(220, 0.2, 0x5a0406, 0.95, this.sprite, normal);
    this.chips = makePoints(180, 0.14, 0x1a1512, 1, this.sprite, normal);
    this.systems = [this.ash, this.ember, this.fire, this.venom, this.spark, this.blood, this.chips];
    for (const sys of this.systems) scene.add(sys.points);
    this._seedAmbient();
    this.tmp = new THREE.Vector3();
    this.focus = new THREE.Vector3();
    this.spread = 150;
  }

  _seedAmbient() {
    for (let i = 0; i < this.ash.count; i++) {
      this.ash.pos[i * 3] = (Math.random() - 0.5) * this.spread;
      this.ash.pos[i * 3 + 1] = Math.random() * 90;
      this.ash.pos[i * 3 + 2] = (Math.random() - 0.5) * this.spread;
      this.ash.vel[i * 3] = (Math.random() - 0.5) * 1.4;
      this.ash.vel[i * 3 + 1] = -1.4 - Math.random();
      this.ash.vel[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
      this.ash.life[i] = Math.random();
    }
    for (let i = 0; i < this.ember.count; i++) {
      this.ember.pos[i * 3] = (Math.random() - 0.5) * this.spread;
      this.ember.pos[i * 3 + 1] = Math.random() * 18;
      this.ember.pos[i * 3 + 2] = (Math.random() - 0.5) * this.spread;
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

  /**
   * Rate is per second with a fractional carry, not per frame. Emitting per
   * frame made a breath twice as dense at 60 FPS as at 30 and whited out the
   * screen on fast machines.
   */
  _emit(sys, origin, dir, rate, dt, speed, spread) {
    sys.carry = (sys.carry ?? 0) + rate * dt;
    const n = Math.floor(sys.carry);
    if (n <= 0) return;
    sys.carry -= n;
    this.burst(sys, origin, dir, n, speed, spread);
  }

  /** Venom is slower and spreads wider, so it reads as a hanging cloud. */
  breathe(origin, target, dt, kind = "fire", spread = 1) {
    this.tmp.copy(target).sub(origin).normalize();
    if (kind === "venom") this._emit(this.venom, origin, this.tmp, 150, dt, 11, 7 * spread);
    else this._emit(this.fire, origin, this.tmp, 260, dt, 18, 6 * spread);
  }

  /**
   * The blast out of the muzzle: a short cone of sparks with a puff of smoke
   * behind it. The weapon used to fire with nothing at all leaving the barrel,
   * which made a shot read as the bolt simply appearing in mid air.
   */
  muzzleFlash(origin, direction) {
    this.burst(this.spark, origin, direction, 26, 16, 7);
    this.burst(this.fire, origin, direction, 8, 9, 3.5);
    // Deliberately not the ambient ash pool: its particles live for the best
    // part of a minute, so a burst into it has no free slots to claim and the
    // ones it does claim get dragged back into the drifting field.
    this.burst(this.chips, origin, direction, 9, 6, 4);
  }

  bloodHit(origin, normal) {
    this.burst(this.blood, origin, normal, 22, 6, 5);
    this.burst(this.chips, origin, normal, 14, 5, 4);
    this.burst(this.spark, origin, normal, 16, 9, 6);
  }

  update(dt, focus) {
    if (focus) this.focus.copy(focus);
    this._step(this.ash, dt, 0, 90, true);
    this._step(this.ember, dt, 0.4, 26, true);
    this._step(this.fire, dt, 2.6, 0, false, 1.1);
    this._step(this.venom, dt, -0.4, 0, false, 0.38);
    this._step(this.spark, dt, -14, 0, false, 1.4);
    this._step(this.blood, dt, -12, 0, false, 1.6);
    this._step(this.chips, dt, -10, 0, false, 1.2);
  }

  _step(sys, dt, gravity, resetY, recycle, decay = 0.85) {
    const p = sys.pos;
    const v = sys.vel;
    for (let i = 0; i < sys.count; i++) {
      const i3 = i * 3;
      if (!recycle && sys.life[i] <= 0) {
        // Expired splats must leave the buffer, or they hang in the air forever.
        if (p[i3 + 1] !== PARKED) {
          p[i3] = 0;
          p[i3 + 1] = PARKED;
          p[i3 + 2] = 0;
        }
        continue;
      }
      v[i3 + 1] += gravity * dt;
      p[i3] += v[i3] * dt;
      p[i3 + 1] += v[i3 + 1] * dt;
      p[i3 + 2] += v[i3 + 2] * dt;
      sys.life[i] -= dt * (recycle ? 0.02 : decay);
      if (recycle && (p[i3 + 1] < 0 || sys.life[i] <= 0)) {
        // Ambient ash and embers follow the camera so the field never runs out.
        p[i3] = this.focus.x + (Math.random() - 0.5) * this.spread;
        p[i3 + 1] = resetY * (0.35 + Math.random() * 0.65);
        p[i3 + 2] = this.focus.z + (Math.random() - 0.5) * this.spread;
        sys.life[i] = 1;
      }
    }
    sys.points.geometry.attributes.position.needsUpdate = true;
  }

  setQuality(tier) {
    const draw = (sys, fraction) => {
      sys.points.geometry.setDrawRange(0, Math.floor(sys.count * fraction));
    };
    const fraction = { cinematic: 1, high: 0.8, medium: 0.5, low: 0.28 }[tier] ?? 0.8;
    draw(this.ash, fraction);
    draw(this.ember, fraction);
    this.ember.points.visible = tier !== "low";
    this.ash.points.material.size = tier === "low" ? 0.45 : 0.3;
  }
}
