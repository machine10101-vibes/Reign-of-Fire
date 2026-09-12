import * as THREE from "three";
import { CONFIG } from "./config.js";

export class Combat {
  constructor(scene, world, dragon, particles, audio) {
    this.scene = scene;
    this.world = world;
    this.dragon = dragon;
    this.particles = particles;
    this.audio = audio;
    this.bolts = [];
    this.raycaster = new THREE.Raycaster();
    this._muzzle = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._hit = new THREE.Vector3();
    this.lastHit = 0;
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

  update(dt, player) {
    this.lastHit = Math.max(0, this.lastHit - dt);
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i];
      b.vel.y -= CONFIG.weapon.gravity * dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      b.mesh.lookAt(b.mesh.position.clone().add(b.vel));
      b.life -= dt;
      const pos = b.mesh.position;
      const ground = this.world.heightAt(pos.x, pos.z);
      let consumed = false;

      if (this.dragon.alive) {
        for (const box of this.dragon.hitboxes) {
          const hit = this._sphereHit(pos, box, 1.6);
          if (hit) {
            const info = box.userData.hit;
            const dmg = 85 * (info?.multiplier ?? 1);
            this.dragon.takeDamage(dmg, info?.name);
            box.getWorldPosition(this._hit);
            const n = this._hit.clone().sub(pos).normalize().multiplyScalar(-1);
            this.particles.bloodHit(pos.clone(), n);
            this.audio.impact();
            this.lastHit = 0.18;
            this.didHitDragon = true;
            consumed = true;
            break;
          }
        }
      }

      if (!consumed && pos.y <= ground + 0.2) {
        this.particles.burst(this.particles.chips, pos, new THREE.Vector3(0, 1, 0), 10, 4, 3);
        consumed = true;
      }
      if (!consumed && b.life <= 0) consumed = true;
      if (consumed) {
        this.scene.remove(b.mesh);
        this.bolts.splice(i, 1);
      }
    }

    if (this.dragon.alive) {
      this._breathDamage(dt, player);
    }
  }

  _sphereHit(point, mesh, extra = 0) {
    mesh.updateWorldMatrix(true, false);
    mesh.geometry.computeBoundingSphere();
    const sph = mesh.geometry.boundingSphere.clone();
    sph.applyMatrix4(mesh.matrixWorld);
    sph.radius += extra;
    return sph.containsPoint(point);
  }

  _breathDamage(dt, player) {
    if (!this._breathing) return;
    const mouth = this.dragon.mouthWorld(this._muzzle);
    const toPlayer = this._dir.copy(player.position).sub(mouth);
    const dist = toPlayer.length();
    if (dist > CONFIG.dragon.breathRange) return;
    toPlayer.normalize();
    const toward = new THREE.Vector3();
    this.dragon.bones.head.getWorldDirection(toward);
    if (toward.dot(toPlayer) > 0.35 || dist < 16) {
      player.applyDamage(CONFIG.dragon.breathDamage * dt);
      player.onFire = 0.6;
      player.addShake(0.04);
    }
  }

  setBreathing(v) {
    this._breathing = v;
  }
}
