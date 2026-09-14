import * as THREE from "three";
import { CONFIG } from "./config.js";

const SWEEP_TIME = 11;

/**
 * Hands-free hunter for `?autoplay=1`. It opens with a slow sweep of the ridge
 * so the terrain reads before anything is shot, then locks onto whichever beast
 * the hunt has focused. It keeps weaving on the spot the whole time, because a
 * static camera makes even a moving world look like a still frame.
 */
export class DemoDirector {
  constructor(player, weapon) {
    this.player = player;
    this.weapon = weapon;
    this.t = 0;
    const params = new URLSearchParams(location.search);
    this.enabled = params.get("autoplay") === "1";
    this.sweep = params.get("sweep") !== "0";
    this.anchor = player.position.clone();
  }

  update(dt, dragonPos) {
    if (!this.enabled) return;
    this.t += dt;
    // The attract loop is a showreel, not a playthrough: the director's hunter
    // mends what it takes so an unattended demo does not spend its second half
    // on a death screen. Real play has no such allowance.
    if (this.player.health < 40) {
      this.player.health = Math.min(100, this.player.health + 24 * dt);
    }
    this._weave();
    if (this.sweep && this.t < SWEEP_TIME) {
      this._surveyRidge(dt);
      return;
    }
    if (dragonPos) this._track(dt, dragonPos);
    this.player.fireHeld = this.t > SWEEP_TIME + 1.5 && Math.floor(this.t * 1.15) % 2 === 0;
    if (this.weapon.bolts === 0) this.player._reload = true;
  }

  /** Strafe back and forth on a long period so the net drift stays near zero. */
  _weave() {
    const p = this.player;
    p.keys.delete("KeyW");
    p.keys.delete("KeyS");
    p.keys.delete("KeyA");
    p.keys.delete("KeyD");
    p.keys.add(Math.sin(this.t * 0.45) > 0 ? "KeyA" : "KeyD");
    // Creep back if the weave has wandered off the camp shelf.
    const drift = p.position.distanceTo(this.anchor);
    if (drift > 14) p.keys.add("KeyW");
  }

  _surveyRidge(dt) {
    const p = this.player;
    const turn = Math.PI * 1.1 * (this.t / SWEEP_TIME);
    p.yaw = THREE.MathUtils.damp(p.yaw, -0.9 + turn, 3, dt);
    p.pitch = THREE.MathUtils.damp(p.pitch, -0.06 + Math.sin(this.t * 0.5) * 0.12, 3, dt);
    p.fireHeld = false;
  }

  _track(dt, dragonPos) {
    const p = this.player;
    const to = dragonPos.clone().sub(p.position);
    // A bolt takes most of a second to cross a hundred metres and drops four
    // metres doing it, so aiming straight at the beast misses every time.
    const flight = to.length() / CONFIG.weapon.muzzle;
    to.y += 0.5 * CONFIG.weapon.gravity * flight * flight;
    const yaw = Math.atan2(-to.x, -to.z);
    const horiz = Math.max(1, Math.hypot(to.x, to.z));
    // Positive pitch is up, and the quarry is always above the ridge line.
    const pitch = THREE.MathUtils.clamp(Math.atan2(to.y, horiz), -0.2, 0.95);
    // Damping raw angles spins the long way round when the target crosses
    // behind the hunter, so turn through the shortest arc instead.
    const delta = ((yaw - p.yaw + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    p.yaw += delta * (1 - Math.exp(-dt * 4.2));
    p.pitch = THREE.MathUtils.damp(p.pitch, pitch, 4.2, dt);
  }
}
