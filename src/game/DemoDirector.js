import * as THREE from "three";

export class DemoDirector {
  constructor(player, weapon) {
    this.player = player;
    this.weapon = weapon;
    this.t = 0;
    this.enabled = /autoplay=1/.test(location.search);
  }

  update(dt, dragonPos) {
    if (!this.enabled) return;
    this.t += dt;
    const p = this.player;
    p.keys.add("KeyW");
    if (this.t > 2 && this.t < 8) p.keys.add("KeyD");
    else p.keys.delete("KeyD");
    const to = dragonPos.clone().sub(p.position);
    const yaw = Math.atan2(-to.x, -to.z);
    const dist = to.length();
    const pitch = -Math.atan2(to.y, dist);
    p.yaw = THREE.MathUtils.damp(p.yaw, yaw, 2.5, dt);
    p.pitch = THREE.MathUtils.damp(p.pitch, THREE.MathUtils.clamp(pitch, -0.6, 0.4), 2.5, dt);
    p.fireHeld = this.t > 3 && Math.floor(this.t * 1.4) % 2 === 0;
    if (this.weapon.bolts === 0) p._reload = true;
  }
}
