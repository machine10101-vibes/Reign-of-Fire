import * as THREE from "three";
import { CONFIG } from "./config.js";

export class Player {
  constructor(camera, world) {
    this.camera = camera;
    this.world = world;
    this.yaw = 0.18;
    this.pitch = -0.12;
    this.position = new THREE.Vector3(4, 8, 18);
    this.velocity = new THREE.Vector3();
    this.keys = new Set();
    this.locked = false;
    this.dragging = false;
    this.shake = new THREE.Vector3();
    this.bob = 0;
    this.foot = 0;
    this.stepPhase = 0;
    this.health = 100;
    this.onFire = 0;
    this.grounded = true;
    this.sprint = false;
    this.crouch = false;
    // How fast the view is turning, in radians per second. Measured from the
    // angles themselves rather than from mouse deltas so that the demo
    // director, which writes yaw and pitch directly, swings the weapon too.
    this.turnRate = { x: 0, y: 0 };
    this._lastYaw = this.yaw;
    this._lastPitch = this.pitch;
    this._euler = new THREE.Euler(0, 0, 0, "YXZ");
    this._wish = new THREE.Vector3();
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this.didStep = false;
  }

  bind(dom) {
    window.addEventListener("keydown", (e) => {
      this.keys.add(e.code);
      if (e.code === "KeyR") this._reload = true;
    });
    window.addEventListener("keyup", (e) => this.keys.delete(e.code));
    dom.addEventListener("mousedown", (e) => {
      if (e.button === 0) this.fireHeld = true;
      this.dragging = true;
      if (document.pointerLockElement !== dom) {
        dom.requestPointerLock?.().catch(() => {});
      }
    });
    window.addEventListener("mouseup", () => {
      this.fireHeld = false;
      this.dragging = false;
    });
    window.addEventListener("mousemove", (e) => {
      const moving = this.locked || this.dragging;
      if (!moving) return;
      const dx = e.movementX || 0;
      const dy = e.movementY || 0;
      this.yaw -= dx * CONFIG.player.mouse;
      this.pitch -= dy * CONFIG.player.mouse;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.25, 1.25);
    });
    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === dom;
    });
  }

  consumeReload() {
    const v = this._reload;
    this._reload = false;
    return v;
  }

  applyDamage(n) {
    this.health = Math.max(0, this.health - n);
    this.shake.x += (Math.random() - 0.5) * 0.08;
    this.shake.y += 0.05;
  }

  addShake(amount) {
    this.shake.x += (Math.random() - 0.5) * amount;
    this.shake.y += (Math.random() - 0.4) * amount;
  }

  update(dt) {
    // Clamped, because a respawn rewrites the pitch outright and an unbounded
    // rate would throw the weapon off the screen for a frame.
    const step = Math.max(dt, 1 / 240);
    this.turnRate.x = THREE.MathUtils.clamp((this.yaw - this._lastYaw) / step, -14, 14);
    this.turnRate.y = THREE.MathUtils.clamp((this.pitch - this._lastPitch) / step, -14, 14);
    this._lastYaw = this.yaw;
    this._lastPitch = this.pitch;

    this.sprint = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
    this.crouch = this.keys.has("KeyC") || this.keys.has("ControlLeft");
    const speed = this.crouch ? CONFIG.player.crouch : this.sprint ? CONFIG.player.sprint : CONFIG.player.speed;

    this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    this._wish.set(0, 0, 0);
    if (this.keys.has("KeyW")) this._wish.add(this._forward);
    if (this.keys.has("KeyS")) this._wish.sub(this._forward);
    if (this.keys.has("KeyD")) this._wish.add(this._right);
    if (this.keys.has("KeyA")) this._wish.sub(this._right);
    const moving = this._wish.lengthSq() > 0;
    if (moving) this._wish.normalize();

    const accel = CONFIG.player.accel;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, this._wish.x * speed, accel, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, this._wish.z * speed, accel, dt);

    const ground = this.world.heightAt(this.position.x, this.position.z);
    const eye = CONFIG.player.eye * (this.crouch ? 0.68 : 1);
    const targetY = ground + eye;
    if (this.position.y <= targetY + 0.08) {
      if (!this.grounded && this.velocity.y < -4) this.addShake(0.08);
      this.grounded = true;
      this.position.y = targetY;
      this.velocity.y = 0;
      if (this.keys.has("Space")) this.velocity.y = CONFIG.player.jump;
    } else {
      this.grounded = false;
      this.velocity.y -= CONFIG.player.gravity * dt;
    }

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // Bounds first: a few boulders straddle the edge of the walkable area, and
    // clamping afterwards would drag the hunter back inside whichever one the
    // push had just cleared. There is a good ten metres of terrain past the
    // limit, so losing the clamp for a frame at the very edge costs nothing.
    const limit = CONFIG.worldSize * 0.46;
    this.position.x = THREE.MathUtils.clamp(this.position.x, -limit, limit);
    this.position.z = THREE.MathUtils.clamp(this.position.z, -limit, limit);

    this.world.resolveCollision(this.position, CONFIG.player.radius);

    this.didStep = false;
    const horiz = Math.hypot(this.velocity.x, this.velocity.z);
    if (this.grounded && horiz > 1.2) {
      this.stepPhase += dt * (this.sprint ? 6.2 : 4.1);
      this.bob = Math.sin(this.stepPhase) * 0.035 * (this.sprint ? 1.4 : 1);
      if (Math.sin(this.stepPhase) < -0.92 && this.foot >= 0) {
        this.didStep = true;
        this.foot = -1;
        this.addShake(this.sprint ? 0.028 : 0.016);
      }
      if (Math.sin(this.stepPhase) > 0) this.foot = 1;
    } else {
      this.bob = THREE.MathUtils.damp(this.bob, 0, 8, dt);
    }

    this.shake.multiplyScalar(Math.exp(-dt * 9));
    this.onFire = Math.max(0, this.onFire - dt);

    this._euler.set(this.pitch + this.shake.y, this.yaw + this.shake.x, this.shake.x * 0.4);
    this.camera.quaternion.setFromEuler(this._euler);
    this.camera.position.copy(this.position);
    this.camera.position.y += this.bob;
    return moving;
  }
}
