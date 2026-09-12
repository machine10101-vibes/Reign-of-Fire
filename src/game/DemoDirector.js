import * as THREE from "three";

export class DemoDirector {
  constructor(player, weapon) {
    this.player = player;
    this.weapon = weapon;
    this.t = 0;
    this.enabled = /autoplay=1/.test(location.search);
  }

  update(dt, dragonPos) {
    if (!this.enabled || !dragonPos) return;
    this.t += dt;
    const p = this.player;
    p.keys.delete("KeyW");
    p.keys.delete("KeyS");
    p.keys.delete("KeyA");
    p.keys.delete("KeyD");
    const to = dragonPos.clone().sub(p.position);
    const yaw = Math.atan2(-to.x, -to.z);
    const horiz = Math.max(1, Math.hypot(to.x, to.z));
    const pitch = THREE.MathUtils.clamp(-Math.atan2(to.y, horiz), -0.72, -0.12);
    p.yaw = THREE.MathUtils.damp(p.yaw, yaw, 4.2, dt);
    p.pitch = THREE.MathUtils.damp(p.pitch, pitch, 4.2, dt);
    p.fireHeld = this.t > 2.2 && Math.floor(this.t * 1.15) % 2 === 0;
    if (this.weapon.bolts === 0) p._reload = true;
  }
}
