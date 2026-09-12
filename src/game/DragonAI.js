import * as THREE from "three";
import { CONFIG } from "./config.js";

export const DragonState = {
  PATROL: "patrol",
  ALERT: "alert",
  DIVE: "dive",
  BREATHE: "breathe",
  RECOVER: "recover",
  PAIN: "pain",
  DEAD: "dead",
};

export class DragonAI {
  constructor(dragon) {
    this.dragon = dragon;
    this.state = DragonState.PATROL;
    this.t = 0;
    this.angle = 0;
    this.target = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.center = new THREE.Vector3(6, CONFIG.dragon.patrolHeight, -28);
    this.hint = "Ashwrought patrols the ash ceiling.";
    this.breathing = false;
    this.spotTimer = 0;
  }

  update(dt, playerPos) {
    this.t += dt;
    if (!this.dragon.alive) {
      this.state = DragonState.DEAD;
    }

    switch (this.state) {
      case DragonState.PATROL:
        this._patrol(dt, playerPos);
        break;
      case DragonState.ALERT:
        this._alert(dt, playerPos);
        break;
      case DragonState.DIVE:
        this._dive(dt, playerPos);
        break;
      case DragonState.BREATHE:
        this._breathe(dt, playerPos);
        break;
      case DragonState.RECOVER:
        this._recover(dt, playerPos);
        break;
      case DragonState.PAIN:
        this._pain(dt, playerPos);
        break;
      case DragonState.DEAD:
        this._dead(dt);
        break;
    }

    this.dragon.root.position.lerp(this.target, 1 - Math.exp(-dt * 3.2));
    const look = this.velocity.lengthSq() > 0.4 ? this.dragon.root.position.clone().add(this.velocity) : playerPos;
    const matrix = this.dragon.root.matrixWorld;
    const current = new THREE.Vector3();
    this.dragon.root.getWorldDirection(current);
    const yaw = Math.atan2(look.x - this.dragon.root.position.x, look.z - this.dragon.root.position.z);
    this.dragon.root.rotation.y = THREE.MathUtils.damp(this.dragon.root.rotation.y, yaw + Math.PI / 2, 3.4, dt);

    this.dragon.update(dt, {
      jaw: this.breathing ? 0.55 : 0.08,
      pitch: this.state === DragonState.DIVE ? -0.42 : this.state === DragonState.DEAD ? 0.9 : 0.08,
      dead: this.state === DragonState.DEAD,
    });
    void matrix;
    return this;
  }

  notifyHit() {
    if (!this.dragon.alive) return;
    this.state = DragonState.PAIN;
    this.spotTimer = 0.45;
    this.hint = "The beast recoils — molten plates split.";
  }

  _patrol(dt, playerPos) {
    this.angle += dt * 0.42;
    const r = CONFIG.dragon.patrolRadius;
    this.target.set(
      this.center.x + Math.cos(this.angle) * r,
      this.center.y + Math.sin(this.t * 0.7) * 3.2,
      this.center.z + Math.sin(this.angle) * r * 0.55
    );
    this.velocity.subVectors(this.target, this.dragon.root.position);
    const dist = playerPos.distanceTo(this.dragon.root.position);
    if (dist < CONFIG.dragon.spotRange) {
      this.state = DragonState.ALERT;
      this.spotTimer = 1.15;
      this.hint = "Spotted. Ashwrought banks toward the ridge.";
    }
  }

  _alert(dt, playerPos) {
    this.spotTimer -= dt;
    this.target.lerp(playerPos.clone().add(new THREE.Vector3(0, 28, 0)), 0.04);
    this.velocity.subVectors(this.target, this.dragon.root.position);
    if (this.spotTimer <= 0) this.state = DragonState.DIVE;
  }

  _dive(dt, playerPos) {
    const aim = playerPos.clone().add(new THREE.Vector3(0, 10, 0));
    this.target.lerp(aim, 0.08);
    this.velocity.subVectors(this.target, this.dragon.root.position).multiplyScalar(CONFIG.dragon.diveSpeed);
    const dist = this.dragon.root.position.distanceTo(playerPos);
    if (dist < CONFIG.dragon.breathRange + 8 || this.dragon.root.position.y < playerPos.y + 14) {
      this.state = DragonState.BREATHE;
      this.spotTimer = 1.6;
      this.hint = "Dive-fire. Break the cone.";
    }
  }

  _breathe(dt, playerPos) {
    this.breathing = true;
    this.spotTimer -= dt;
    this.target.copy(this.dragon.root.position);
    this.target.y = Math.max(this.target.y, playerPos.y + 12);
    if (this.spotTimer <= 0) {
      this.breathing = false;
      this.state = DragonState.RECOVER;
      this.spotTimer = 2.4;
      this.hint = "It climbs the thermal. Lead the next bolt.";
    }
  }

  _recover(dt, playerPos) {
    this.breathing = false;
    this.spotTimer -= dt;
    this.target.set(playerPos.x + 28, CONFIG.dragon.patrolHeight, playerPos.z - 24);
    if (this.spotTimer <= 0) this.state = this.dragon.hp < this.dragon.maxHp * 0.35 ? DragonState.DIVE : DragonState.PATROL;
  }

  _pain(dt, playerPos) {
    this.breathing = false;
    this.spotTimer -= dt;
    this.target.copy(this.dragon.root.position).add(new THREE.Vector3(8, 6, -6));
    if (this.spotTimer <= 0) this.state = DragonState.ALERT;
    void playerPos;
  }

  _dead(dt) {
    this.breathing = false;
    this.hint = "Ashwrought falls. The ridge goes quiet.";
    this.target.y -= 18 * dt;
    this.velocity.set(0, -18, 0);
  }
}
