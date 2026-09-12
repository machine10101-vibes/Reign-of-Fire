import * as THREE from "three";
import { CONFIG } from "./config.js";

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _head = new THREE.Vector3();

export class Combat {
  constructor(scene, world, hunt, particles, audio) {
    this.scene = scene;
    this.world = world;
    this.hunt = hunt;
    this.particles = particles;
    this.audio = audio;
    this.bolts = [];
    this.mortars = [];
    this.clouds = [];
    this.waves = [];
    this.flashes = [];
    this._muzzle = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._hit = new THREE.Vector3();
    this.lastHit = 0;
    this.lastHitPart = "";
    this.didHitDragon = false;

    this.boltGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.55, 6);
    this.boltGeo.rotateX(Math.PI / 2);
    this.boltMat = new THREE.MeshStandardMaterial({
      color: 0x8a8a90,
      metalness: 0.9,
      roughness: 0.28,
      emissive: new THREE.Color(0x221100),
    });
    this.tipGeo = new THREE.ConeGeometry(0.04, 0.12, 6);
    this.tipGeo.rotateX(-Math.PI / 2);

    this.mortarGeo = new THREE.IcosahedronGeometry(0.9, 1);
    this.mortarMat = new THREE.MeshStandardMaterial({
      color: 0x2a1008,
      emissive: new THREE.Color(1.6, 0.4, 0.06),
      emissiveIntensity: 2.4,
      roughness: 0.6,
    });
    this.cloudGeo = new THREE.IcosahedronGeometry(1, 2);
    this.waveGeo = new THREE.RingGeometry(0.8, 1, 48);
    this.waveGeo.rotateX(-Math.PI / 2);
  }

  fire(origin, direction) {
    const mesh = new THREE.Group();
    mesh.add(new THREE.Mesh(this.boltGeo, this.boltMat));
    const tip = new THREE.Mesh(this.tipGeo, this.boltMat);
    tip.position.z = -0.32;
    mesh.add(tip);
    mesh.position.copy(origin);
    mesh.lookAt(origin.clone().add(direction));
    this.scene.add(mesh);
    this.bolts.push({
      mesh,
      vel: direction.clone().normalize().multiplyScalar(CONFIG.weapon.muzzle),
      life: 3.2,
    });
  }

  // --------------------------------------------------------- AI-driven attacks

  handleRequests(requests) {
    for (const r of requests) {
      if (r.type === "mortar") this._launchMortar(r);
      else if (r.type === "cloud") this._spawnCloud(r);
      else if (r.type === "shockwave") this._spawnWave(r);
    }
  }

  _launchMortar({ origin, target, damage }) {
    const mesh = new THREE.Mesh(this.mortarGeo, this.mortarMat);
    mesh.position.copy(origin);
    const light = new THREE.PointLight(0xff5a10, 26, 34, 2);
    mesh.add(light);
    this.scene.add(mesh);
    // Solve the arc for a fixed flight time so the tell is readable.
    const flight = THREE.MathUtils.clamp(origin.distanceTo(target) / 34, 1.1, 2.8);
    const g = 26;
    const vel = _v.subVectors(target, origin).divideScalar(flight).clone();
    vel.y += 0.5 * g * flight;
    this.mortars.push({ mesh, vel, gravity: g, damage, life: flight + 3 });
    this.audio.mortar();
  }

  _spawnCloud({ origin, toward, damage }) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x9fd020,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(this.cloudGeo, mat);
    const drift = _v.subVectors(toward, origin).normalize().multiplyScalar(6);
    mesh.position.copy(origin).addScaledVector(drift, 0.6);
    mesh.scale.setScalar(2);
    this.scene.add(mesh);
    this.clouds.push({
      mesh,
      mat,
      damage,
      life: CONFIG.hunt.cloudLife,
      max: CONFIG.hunt.cloudLife,
      drift: drift.clone().multiplyScalar(0.35),
    });
  }

  _spawnWave({ origin }) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffb060,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(this.waveGeo, mat);
    mesh.position.set(origin.x, this.world.heightAt(origin.x, origin.z) + 0.6, origin.z);
    this.scene.add(mesh);
    this.waves.push({ mesh, mat, life: 1.1, max: 1.1, hit: false });
    this.particles.burst(this.particles.chips, mesh.position, new THREE.Vector3(0, 1, 0), 40, 14, 10);
  }

  // --------------------------------------------------------------- simulation

  update(dt, player) {
    this.lastHit = Math.max(0, this.lastHit - dt);
    this._updateBolts(dt);
    this._updateMortars(dt, player);
    this._updateClouds(dt, player);
    this._updateWaves(dt, player);
    this._updateFlashes(dt);
    this._breathDamage(dt, player);
  }

  _updateBolts(dt) {
    const boxes = this.hunt.hitboxes;
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i];
      b.vel.y -= CONFIG.weapon.gravity * dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      b.mesh.lookAt(_v.copy(b.mesh.position).add(b.vel));
      b.life -= dt;
      const pos = b.mesh.position;
      let consumed = false;

      for (const box of boxes) {
        if (!this._sphereHit(pos, box, 0.8)) continue;
        const info = box.userData.hit;
        const dragon = info.dragon;
        const dealt = dragon.takeDamage(CONFIG.weapon.damage * info.multiplier, info.name);
        box.getWorldPosition(this._hit);
        _n.copy(this._hit).sub(pos).normalize().multiplyScalar(-1);
        this.particles.bloodHit(pos.clone(), _n);
        this.audio.impact(info.name === "head");
        this.lastHit = 0.18;
        this.lastHitPart = info.name;
        this.didHitDragon = true;
        this.lastHitDragon = dragon;
        this.lastHitDealt = dealt;
        consumed = true;
        break;
      }

      if (!consumed && pos.y <= this.world.heightAt(pos.x, pos.z) + 0.2) {
        this.particles.burst(this.particles.chips, pos, new THREE.Vector3(0, 1, 0), 10, 4, 3);
        consumed = true;
      }
      if (!consumed && b.life <= 0) consumed = true;
      if (consumed) {
        this.scene.remove(b.mesh);
        this.bolts.splice(i, 1);
      }
    }
  }

  _updateMortars(dt, player) {
    for (let i = this.mortars.length - 1; i >= 0; i--) {
      const m = this.mortars[i];
      m.vel.y -= m.gravity * dt;
      m.mesh.position.addScaledVector(m.vel, dt);
      m.mesh.rotation.x += dt * 4;
      m.mesh.rotation.y += dt * 3;
      m.life -= dt;
      const pos = m.mesh.position;
      this.particles.burst(this.particles.spark, pos, _v.set(0, 0.4, 0), 2, 3, 3);
      const ground = this.world.heightAt(pos.x, pos.z);
      if (pos.y <= ground + 0.6 || m.life <= 0) {
        this._explode(pos, m.damage, player);
        this.scene.remove(m.mesh);
        this.mortars.splice(i, 1);
      }
    }
  }

  _explode(pos, damage, player) {
    // Weighted toward small debris: a handful of large fire splats near the
    // camera reads as a few blurry circles rather than a blast.
    this.particles.burst(this.particles.fire, pos, _v.set(0, 1, 0), 26, 13, 11);
    this.particles.burst(this.particles.spark, pos, _v.set(0, 1, 0), 90, 22, 18);
    this.particles.burst(this.particles.chips, pos, _v.set(0, 1, 0), 70, 16, 13);
    this._flash(pos);
    this.audio.explode();
    const dist = pos.distanceTo(player.position);
    const radius = CONFIG.hunt.mortarRadius;
    if (dist < radius) {
      const falloff = 1 - dist / radius;
      player.applyDamage(damage * falloff);
      player.onFire = 0.8;
      player.addShake(0.2 * falloff);
    } else if (dist < radius * 3) {
      player.addShake(0.06);
    }
  }

  /** A short, bright point light does more for an impact than more particles. */
  _flash(pos) {
    const light = new THREE.PointLight(0xffb050, 260, 60, 2);
    light.position.copy(pos);
    this.scene.add(light);
    this.flashes.push({ light, life: 0.35, max: 0.35 });
  }

  _updateFlashes(dt) {
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const f = this.flashes[i];
      f.life -= dt;
      f.light.intensity = 260 * Math.max(0, f.life / f.max) ** 2;
      if (f.life <= 0) {
        this.scene.remove(f.light);
        this.flashes.splice(i, 1);
      }
    }
  }

  _updateClouds(dt, player) {
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i];
      c.life -= dt;
      const t = 1 - c.life / c.max;
      c.mesh.position.addScaledVector(c.drift, dt);
      c.mesh.position.y += dt * 0.6;
      c.mesh.scale.setScalar(2 + t * CONFIG.hunt.cloudRadius);
      c.mat.opacity = 0.24 * (1 - t) ** 0.7;
      if (player.position.distanceTo(c.mesh.position) < c.mesh.scale.x) {
        player.applyDamage(c.damage * dt);
        player.onFire = 0.4;
      }
      if (c.life <= 0) {
        this.scene.remove(c.mesh);
        c.mat.dispose();
        this.clouds.splice(i, 1);
      }
    }
  }

  _updateWaves(dt, player) {
    for (let i = this.waves.length - 1; i >= 0; i--) {
      const w = this.waves[i];
      w.life -= dt;
      const t = 1 - w.life / w.max;
      const radius = 4 + t * 26;
      w.mesh.scale.setScalar(radius);
      w.mat.opacity = 0.55 * (1 - t);
      const dist = Math.hypot(player.position.x - w.mesh.position.x, player.position.z - w.mesh.position.z);
      if (!w.hit && Math.abs(dist - radius) < 3 && player.grounded) {
        w.hit = true;
        player.applyDamage(14);
        player.addShake(0.24);
      }
      if (w.life <= 0) {
        this.scene.remove(w.mesh);
        w.mat.dispose();
        this.waves.splice(i, 1);
      }
    }
  }

  _sphereHit(point, mesh, extra = 0) {
    mesh.updateWorldMatrix(true, false);
    if (!mesh.geometry.boundingSphere) mesh.geometry.computeBoundingSphere();
    const sph = mesh.geometry.boundingSphere.clone();
    sph.applyMatrix4(mesh.matrixWorld);
    sph.radius += extra;
    return sph.containsPoint(point);
  }

  /** Each breathing beast checks its own cone using its own species reach. */
  _breathDamage(dt, player) {
    for (const e of this.hunt.breathSources ?? []) {
      const dragon = e.dragon;
      const stats = e.spec.stats;
      const mouth = dragon.mouthWorld(this._muzzle);
      const toPlayer = this._dir.copy(player.position).sub(mouth);
      const dist = toPlayer.length();
      if (dist > stats.attackRange) continue;
      toPlayer.normalize();
      dragon.headForward(_head);
      const cone = 0.35 / (e.ai.breath.spread || 1);
      if (_head.dot(toPlayer) > cone || dist < stats.attackRange * 0.3) {
        player.applyDamage(stats.damage * dt);
        player.onFire = 0.6;
        player.addShake(0.04);
      }
    }
  }
}
