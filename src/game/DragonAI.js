import * as THREE from "three";
import { ATTACK } from "./species.js";

export const DragonState = {
  PATROL: "patrol",
  STALK: "stalk",
  ALERT: "alert",
  ATTACK: "attack",
  RECOVER: "recover",
  PAIN: "pain",
  FLEE: "flee",
  DEAD: "dead",
};

/**
 * Range band each style is willing to open from, plus whether committing to it
 * closes distance. `closer` styles are the only sane pick from across the map.
 */
const STYLE = {
  [ATTACK.DIVE_FIRE]: { band: [18, 260], closer: true, tell: "Dive-fire. Break out of the cone." },
  [ATTACK.STRAFE_RUN]: { band: [14, 260], closer: true, tell: "Strafing run — it will not slow down." },
  [ATTACK.HOVER_BARRAGE]: { band: [22, 95], tell: "It is holding station to burn you down." },
  [ATTACK.LAVA_MORTAR]: { band: [28, 140], tell: "Mortar arc — move sideways, do not backpedal." },
  [ATTACK.AMBUSH_LUNGE]: { band: [6, 120], closer: true, tell: "Lunge incoming — it came in silent." },
  [ATTACK.VENOM_SPRAY]: { band: [8, 62], tell: "Caustic spray. The cloud lingers, keep moving." },
  [ATTACK.TAIL_SWEEP]: { band: [0, 36], tell: "Tail sweep at ground level — get airborne or get clear." },
};

const _v = new THREE.Vector3();
const _aim = new THREE.Vector3();
const _side = new THREE.Vector3();
const _mouth = new THREE.Vector3();

function noise(scale) {
  return (Math.random() - 0.5) * scale;
}

export class DragonAI {
  constructor(dragon, world, home) {
    this.dragon = dragon;
    this.spec = dragon.spec;
    this.mind = dragon.spec.mind;
    this.stats = dragon.spec.stats;
    this.world = world;
    this.home = home.clone();
    this.clearance = dragon.spec.build.scale * 0.5 + 2;

    this.state = DragonState.PATROL;
    this.t = 0;
    this.phaseT = 0;
    this.angle = Math.random() * Math.PI * 2;
    this.target = dragon.root.position.clone();
    this.heading = new THREE.Vector3(0, 0, 1);
    this.speed = this.stats.flySpeed;
    this.attackStyle = null;
    this.phase = "windup";

    this.breathKind = dragon.spec.mind.breath ?? "fire";
    this.breath = { active: false, kind: this.breathKind, spread: 1, aim: new THREE.Vector3(0, 0, 1) };
    this.requests = [];
    this.melee = 0;
    this.charge = 0;
    this.flap = 1;
    this.roll = 0;
    this.pitch = 0.06;
    this.engaged = false;
    this.hint = dragon.spec.lines.idle;
    this.stateLabel = "patrol";
    this._hitCount = 0;
    this._flinch = 1;
    this.fallSpeed = 4;
    this.roar = 0;
  }

  get position() {
    return this.dragon.root.position;
  }

  /** 0..1 live aggression: personality, softened by wounds it cannot shrug off. */
  get aggressionNow() {
    const wounded = 1 - this.dragon.hpFraction;
    const nerve = this.mind.courage;
    return THREE.MathUtils.clamp(
      this.mind.aggression + this._packNerve() + wounded * (nerve - 0.5) * 0.8,
      0,
      1
    );
  }

  /**
   * Courage borrowed from the rest of the pack. A packmate that has merely
   * spotted the hunter is worth half of one that has actually committed, which
   * is what lets a flight of three escalate off a single brave opener — and
   * what makes killing one of them visibly cow the survivors.
   */
  _packNerve() {
    if (!this.mind.packMinded) return 0;
    const pack = (this._alliesEngaged ?? 0) * 0.5 + (this._alliesAttacking ?? 0);
    return Math.min(pack, 3) * this.mind.packMinded;
  }

  update(dt, ctx) {
    this.t += dt;
    this.phaseT += dt;
    this._playerPos = ctx?.playerPos ?? null;
    // The hunt counts the whole roster, so discount itself before asking how
    // much company it has.
    this._alliesAttacking = Math.max(
      0,
      (ctx?.alliesAttacking ?? 0) - (this.state === DragonState.ATTACK ? 1 : 0)
    );
    this._alliesEngaged = Math.max(0, (ctx?.alliesEngaged ?? 0) - (this.engaged ? 1 : 0));
    this.melee = 0;
    this.breath.active = false;
    this.charge = Math.max(0, this.charge - dt * 2);

    if (!this.dragon.alive && this.state !== DragonState.DEAD) this._enter(DragonState.DEAD);

    switch (this.state) {
      case DragonState.PATROL:
        this._patrol(dt, ctx);
        break;
      case DragonState.STALK:
        this._stalk(dt, ctx);
        break;
      case DragonState.ALERT:
        this._alert(dt, ctx);
        break;
      case DragonState.ATTACK:
        this._attack(dt, ctx);
        break;
      case DragonState.RECOVER:
        this._recover(dt, ctx);
        break;
      case DragonState.PAIN:
        this._pain(dt, ctx);
        break;
      case DragonState.FLEE:
        this._flee(dt, ctx);
        break;
      case DragonState.DEAD:
        this._dead(dt);
        break;
    }

    this._move(dt);
    this._pose(dt, ctx);
    this._aimBreath(dt, ctx);
  }

  /**
   * One direction the flame agrees on. The particles used to spray straight at
   * the hunter while the damage cone was tested against the head's facing,
   * which never aims at anything, so the fire visibly engulfed you and did
   * nothing. Sweeping it at the beast's own turn rate is also what makes
   * breaking sideways a real answer rather than a superstition.
   */
  _aimBreath(dt, ctx) {
    if (!ctx?.playerPos || this.state === DragonState.DEAD) {
      this.dragon.headForward(this.breath.aim);
      return;
    }
    _v.subVectors(ctx.playerPos, this.dragon.mouthWorld(_mouth));
    if (_v.lengthSq() < 1e-6) return;
    // Tracked between bursts as well as during them. The hover barrage and the
    // venom spray strobe the flame on and off every three quarters of a
    // second, and restarting the sweep from the head's facing each time left
    // those species spraying past the hunter for a whole attack: a Sulfurmaw
    // could breathe for a third of the fight and land almost nothing. It
    // re-acquires faster than it sweeps, so dodging a lit flame still works.
    const rate = this.stats.turnRate * (this.breath.active ? 1.05 : 1.6);
    this.breath.aim.lerp(_v.normalize(), 1 - Math.exp(-dt * rate)).normalize();
  }

  /** Where the flame is actually pointing, in world space. */
  breathTarget(target = new THREE.Vector3()) {
    return target
      .copy(this.dragon.mouthWorld(_mouth))
      .addScaledVector(this.breath.aim, this.stats.attackRange);
  }

  _enter(state) {
    this.state = state;
    this.phaseT = 0;
    this.stateLabel = state;
    // Backing off earns the right to press again next time in.
    if (state !== DragonState.ATTACK) this._pressed = false;
    // A roar on the commit, not on every state change: the hunter has to hear
    // the tell that a pass is starting, and a roar every time the AI blinks
    // is just noise.
    if (state === DragonState.ATTACK) {
      this.roar = 1;
      this.announceRoar = true;
    }
  }

  _move(dt) {
    const pos = this.position;
    if (this.state === DragonState.DEAD) {
      pos.y -= this.fallSpeed * dt;
      this.fallSpeed = Math.min(52, this.fallSpeed + 34 * dt);
      const floor = this.world.heightAt(pos.x, pos.z) + this.dragon.spec.build.scale * 0.22;
      if (pos.y <= floor) {
        pos.y = floor;
        this.grounded = true;
      }
      return;
    }

    _v.subVectors(this.target, pos);
    const dist = _v.length();
    if (dist > 0.001) {
      const step = Math.min(dist, this.speed * dt);
      _v.divideScalar(dist);
      pos.addScaledVector(_v, step);
      this.heading.lerp(_v, 1 - Math.exp(-dt * this.stats.turnRate));
      if (this.heading.lengthSq() > 0.0001) this.heading.normalize();
    }

    const floor = this.world.heightAt(pos.x, pos.z) + this.clearance;
    if (pos.y < floor) pos.y = THREE.MathUtils.damp(pos.y, floor, 8, dt);
    this.grounded = pos.y <= floor + 0.5;

    // A beast this size must never occupy the camera; at point blank its wing
    // membrane passes through the near plane and clips the first-person weapon.
    if (this._playerPos) {
      const standoff = this.clearance * 0.85 + 2;
      _v.subVectors(pos, this._playerPos);
      const gap = _v.length();
      if (gap > 0.001 && gap < standoff) pos.copy(this._playerPos).addScaledVector(_v.divideScalar(gap), standoff);
    }
  }

  _pose(dt, ctx) {
    // The rig's nose is local +X, so the body yaw trails the heading by a quarter turn.
    const yaw = Math.atan2(this.heading.x, this.heading.z) - Math.PI / 2;
    const current = this.dragon.root.rotation.y;
    const delta = ((yaw - current + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    this.dragon.root.rotation.y = current + delta * (1 - Math.exp(-dt * this.stats.turnRate));

    let lookAt = 0;
    let lookPitch = 0;
    if (ctx?.playerPos && this.state !== DragonState.DEAD) {
      _v.subVectors(ctx.playerPos, this.position);
      const dist = Math.max(_v.length(), 0.001);
      // How far the hunter sits above or below the beast, as a fraction of
      // range. A dive from overhead used to leave the head still looking at
      // the horizon, so the fire came out of a skull that was not pointing
      // at anything.
      lookPitch = THREE.MathUtils.clamp(_v.y / dist, -0.85, 0.7);
      _v.divideScalar(dist);
      _side.copy(this.heading).cross(_v);
      lookAt = THREE.MathUtils.clamp(_side.y * 2, -1, 1);
    }
    this.roar = Math.max(0, this.roar - dt * 1.6);
    const tracking = this.breath.active || this.state === DragonState.ATTACK ? 1.15 : 0.65;

    this.dragon.update(dt, {
      jaw: this.breath.active ? 0.6 : this.state === DragonState.ATTACK ? 0.25 : 0.05,
      pitch: this.pitch,
      roll: this.roll,
      flap: this.flap,
      flapRate: this.state === DragonState.ATTACK ? 1.35 : 1,
      lash:
        this.attackStyle === ATTACK.TAIL_SWEEP && this.phase === "commit"
          ? 3.4
          : this.state === DragonState.PAIN
            ? 2.4
            : 1,
      neck: this.breath.active ? -0.12 : 0,
      lookAt: lookAt * tracking,
      lookPitch: lookPitch * tracking,
      roar: this.roar,
      grounded: this.grounded,
      charge: this.charge,
      dead: this.state === DragonState.DEAD,
    });
  }

  // ---------------------------------------------------------------- states

  _patrol(dt, ctx) {
    this.flap = 1;
    this.roll = Math.sin(this.t * 0.5) * 0.12;
    this.pitch = 0.05;
    this.speed = this.stats.flySpeed * 0.75;
    this.angle += dt * (0.3 + this.mind.erratic * 0.5);

    // Low-territorial species drift after the player instead of holding a ring.
    const anchor = _aim.copy(this.home).lerp(ctx.playerPos, (1 - this.mind.territorial) * 0.55);
    const r = this.stats.patrolRadius;
    this.target.set(
      anchor.x + Math.cos(this.angle) * r + noise(this.mind.erratic * 14),
      this.home.y + Math.sin(this.t * 0.6) * 4 + noise(this.mind.erratic * 5),
      anchor.z + Math.sin(this.angle) * r * 0.7 + noise(this.mind.erratic * 14)
    );

    if (this._shouldEngage(ctx)) {
      this.engaged = true;
      if (this.mind.stalker) {
        this._enter(DragonState.STALK);
        this.hint = this.spec.lines.spot;
      } else {
        this._enter(DragonState.ALERT);
        this.hint = this.spec.lines.spot;
      }
    }
  }

  /** Pale Stalker behaviour: shadow the player low and silent, then pounce. */
  _stalk(dt, ctx) {
    this.flap = 0.12;
    this.pitch = 0.02;
    this.speed = this.stats.flySpeed * 0.85;
    const behind = _aim.subVectors(ctx.playerPos, this.position).setY(0).normalize();
    const standoff = this.stats.attackRange * 1.9;
    this.target
      .copy(ctx.playerPos)
      .addScaledVector(behind, -standoff)
      .setY(this.world.heightAt(ctx.playerPos.x, ctx.playerPos.z) + 10 + Math.sin(this.t * 0.7) * 3);
    this.roll = THREE.MathUtils.damp(this.roll, 0, 3, dt);

    const ready = this.phaseT > this.mind.patience * 1.6;
    const pounceWindow = ctx.playerVulnerable || this.phaseT > this.mind.patience * 3;
    if (ready && pounceWindow) {
      this._chooseAttack(ctx);
      this._enter(DragonState.ATTACK);
    }
  }

  _alert(dt, ctx) {
    this.flap = 1.15;
    this.speed = this.stats.flySpeed;
    this.roll = THREE.MathUtils.damp(this.roll, 0, 3, dt);
    this.target
      .copy(ctx.playerPos)
      .add(_aim.set(noise(24), 26 + this.stats.patrolHeight * 0.25, noise(24)));
    const windup = THREE.MathUtils.lerp(1.6, 0.35, this.aggressionNow) * this.mind.patience;
    if (this.phaseT > windup) {
      this._chooseAttack(ctx);
      this._enter(DragonState.ATTACK);
    }
  }

  _attack(dt, ctx) {
    switch (this.attackStyle) {
      case ATTACK.DIVE_FIRE:
        this._diveFire(dt, ctx);
        break;
      case ATTACK.STRAFE_RUN:
        this._strafeRun(dt, ctx);
        break;
      case ATTACK.HOVER_BARRAGE:
        this._hoverBarrage(dt, ctx);
        break;
      case ATTACK.LAVA_MORTAR:
        this._lavaMortar(dt, ctx);
        break;
      case ATTACK.AMBUSH_LUNGE:
        this._ambushLunge(dt, ctx);
        break;
      case ATTACK.VENOM_SPRAY:
        this._venomSpray(dt, ctx);
        break;
      case ATTACK.TAIL_SWEEP:
        this._tailSweep(dt, ctx);
        break;
      default:
        this._endAttack();
    }
  }

  _recover(dt, ctx) {
    this.flap = 1;
    this.pitch = -0.14;
    this.speed = this.stats.flySpeed;
    this.roll = THREE.MathUtils.damp(this.roll, 0, 2.5, dt);
    const away = _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
    this.target
      .copy(ctx.playerPos)
      .addScaledVector(away, this.stats.attackRange * 1.8)
      .setY(this.home.y + noise(6));

    const cooldown = THREE.MathUtils.lerp(4.2, 0.9, this.aggressionNow) * this.mind.patience;
    if (this.phaseT > cooldown) {
      if (this._shouldFlee()) {
        this._enter(DragonState.FLEE);
        this.hint = this.spec.lines.flee;
      } else if (this.mind.stalker) {
        this._enter(DragonState.STALK);
      } else if (this._shouldEngage(ctx)) {
        this._chooseAttack(ctx);
        this._enter(DragonState.ATTACK);
      } else {
        this._enter(DragonState.PATROL);
        this.hint = this.spec.lines.idle;
      }
    }
  }

  _pain(dt, ctx) {
    this.flap = 1.5;
    this.speed = this.stats.flySpeed * 1.2;
    this.roll = THREE.MathUtils.damp(this.roll, 0.5 * this._flinch, 5, dt);
    const away = _aim.subVectors(this.position, ctx.playerPos).normalize();
    this.target.copy(this.position).addScaledVector(away, 18).add(_v.set(0, 8, 0));
    const flinch = THREE.MathUtils.lerp(1.1, 0.18, this.mind.courage);
    if (this.phaseT > flinch) {
      if (this._shouldFlee()) {
        this._enter(DragonState.FLEE);
        this.hint = this.spec.lines.flee;
      } else if (this.aggressionNow > 0.7) {
        this._chooseAttack(ctx);
        this._enter(DragonState.ATTACK);
      } else {
        this._enter(DragonState.RECOVER);
      }
    }
  }

  _flee(dt, ctx) {
    this.flap = 1.6;
    this.pitch = -0.4;
    this.speed = this.stats.flySpeed * 1.5;
    const away = _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
    this.target.copy(this.position).addScaledVector(away, 60).setY(this.home.y + 34);
    // Courage recovers with distance; a scavenger that escapes will come back.
    if (this.position.distanceTo(ctx.playerPos) > this.stats.spotRange * 0.9 && this.phaseT > 6) {
      this._enter(DragonState.PATROL);
      this.hint = this.spec.lines.idle;
    }
  }

  _dead(dt) {
    this.flap = 0;
    this.hint = this.spec.lines.dead;
    this.stateLabel = "dead";
    void dt;
  }

  // --------------------------------------------------------------- attacks

  _diveFire(dt, ctx) {
    const toPlayer = _aim.subVectors(ctx.playerPos, this.position);
    const dist = toPlayer.length();
    if (this.phase === "windup") {
      this.flap = 1.3;
      this.pitch = -0.3;
      this.speed = this.stats.flySpeed * 1.1;
      this.target.copy(ctx.playerPos).add(_v.set(noise(10), 34, noise(10)));
      if (this.phaseT > 1.1 || this.position.y > ctx.playerPos.y + 28) this._phase("commit");
    } else if (this.phase === "commit") {
      this.flap = 0.35;
      this.pitch = -0.5;
      this.charge = Math.min(1, this.charge + dt * 2.5);
      this.speed = this.stats.diveSpeed;
      this.target.copy(ctx.playerPos).add(_v.set(0, this.clearance * 0.7, 0));
      if (dist < this.stats.attackRange * 0.85 || this.phaseT > 3.2) this._phase("release");
    } else {
      this.flap = 0.7;
      this.pitch = 0.12;
      this.speed = this.stats.flySpeed * 0.9;
      this.breath.active = dist < this.stats.attackRange;
      this.breath.kind = "fire";
      this.target.copy(ctx.playerPos).add(_v.set(noise(6), 16, noise(6)));
      if (this.phaseT > 1.2 + this.mind.patience * 0.4) this._endAttack();
    }
  }

  _strafeRun(dt, ctx) {
    if (this.phase === "windup") {
      this.flap = 1.5;
      this.speed = this.stats.flySpeed * 1.2;
      // Swing out perpendicular so the pass crosses the player's front.
      _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
      _side.set(-_aim.z, 0, _aim.x).multiplyScalar(this.stats.attackRange * 1.6);
      this.target.copy(ctx.playerPos).addScaledVector(_aim, this.stats.attackRange * 1.4).add(_side);
      this.target.y = ctx.playerPos.y + 16 + noise(6);
      this.roll = THREE.MathUtils.damp(this.roll, 0.85, 4, dt);
      if (this.phaseT > 0.9 || this.position.distanceTo(this.target) < 8) {
        this._phase("commit");
        this._runVector = _aim.subVectors(ctx.playerPos, this.position).setY(0).normalize().clone();
        this._runFrom = this.position.clone();
      }
    } else if (this.phase === "commit") {
      this.flap = 0.5;
      this.pitch = -0.12;
      this.speed = this.stats.flySpeed * 2.0;
      this.roll = THREE.MathUtils.damp(this.roll, -0.4, 5, dt);
      this.target
        .copy(this._runFrom)
        .addScaledVector(this._runVector, this.stats.attackRange * 4)
        .setY(ctx.playerPos.y + 8);
      const dist = this.position.distanceTo(ctx.playerPos);
      this.breath.active = dist < this.stats.attackRange * 0.8;
      this.breath.kind = "fire";
      this.breath.spread = 1.4;
      if (this.phaseT > 2.6 || this.position.distanceTo(this.target) < 10) this._phase("release");
    } else {
      this.flap = 1.4;
      this.pitch = -0.34;
      this.speed = this.stats.flySpeed * 1.4;
      this.roll = THREE.MathUtils.damp(this.roll, 0.6, 4, dt);
      this.target.copy(this.position).addScaledVector(this._runVector, 40).add(_v.set(0, 22, 0));
      if (this.phaseT > 0.8) this._endAttack();
    }
  }

  _hoverBarrage(dt, ctx) {
    this.flap = 1.25;
    this.pitch = 0.1;
    this.speed = this.stats.flySpeed * 0.6;
    _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
    this.target
      .copy(ctx.playerPos)
      .addScaledVector(_aim, this.stats.attackRange * 0.7)
      .setY(ctx.playerPos.y + 18 + Math.sin(this.t * 1.4) * 3);
    // Three short bursts with gaps you can push cover through.
    const cycle = this.phaseT % 1.5;
    this.breath.active = cycle < 0.75;
    this.breath.kind = this.breathKind;
    this.breath.spread = 0.8;
    this.charge = cycle > 0.55 && cycle < 0.75 ? 1 : this.charge;
    if (this.phaseT > 4.5) this._endAttack();
    void dt;
  }

  _lavaMortar(dt, ctx) {
    this.flap = 1.1;
    this.pitch = 0.08;
    this.speed = this.stats.flySpeed * 0.5;
    _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
    this.target
      .copy(ctx.playerPos)
      .addScaledVector(_aim, this.stats.attackRange * 0.9)
      .setY(ctx.playerPos.y + 26 + Math.sin(this.t) * 2);

    this.charge = Math.min(1, this.charge + dt * 1.4);
    this._shots = this._shots ?? 0;
    const gap = 0.9;
    if (this.phaseT > 1.2 + this._shots * gap && this._shots < 3) {
      this._shots++;
      this.charge = 0;
      // Lead the player so backpedalling walks into the splash.
      const lead = _v.copy(ctx.playerVelocity ?? _v.set(0, 0, 0)).multiplyScalar(0.9);
      this.requests.push({
        type: "mortar",
        origin: this.dragon.mouthWorld(new THREE.Vector3()),
        target: ctx.playerPos.clone().add(lead).add(new THREE.Vector3(noise(5), 0, noise(5))),
        damage: this.stats.damage,
      });
    }
    if (this._shots >= 3 && this.phaseT > 1.2 + 3 * gap + 0.6) {
      this._shots = 0;
      this._endAttack();
    }
  }

  _ambushLunge(dt, ctx) {
    const dist = this.position.distanceTo(ctx.playerPos);
    if (this.phase === "windup") {
      this.flap = 0.1;
      this.pitch = 0.04;
      this.speed = this.stats.flySpeed * 0.9;
      _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
      this.target
        .copy(ctx.playerPos)
        .addScaledVector(_aim, this.stats.attackRange * 1.4)
        .setY(this.world.heightAt(this.position.x, this.position.z) + this.clearance + 4);
      if (dist < this.stats.attackRange * 1.7 || this.phaseT > 2.4) this._phase("commit");
    } else if (this.phase === "commit") {
      this.flap = 1.9;
      this.pitch = -0.05;
      this.speed = this.stats.diveSpeed;
      this.charge = Math.min(1, this.charge + dt * 4);
      this.target.copy(ctx.playerPos).add(_v.set(0, this.clearance * 0.35, 0));
      if (dist < this.clearance + 6) {
        this.melee = this.stats.damage;
        this.hint = `${this.spec.name} slams past you.`;
        this._phase("release");
      } else if (this.phaseT > 2.2) {
        this._phase("release");
      }
    } else {
      this.flap = 1.6;
      this.pitch = -0.42;
      this.speed = this.stats.flySpeed * 1.5;
      this.breath.active = this.phaseT < 0.35 && dist < this.stats.attackRange;
      _aim.subVectors(this.position, ctx.playerPos).normalize();
      this.target.copy(this.position).addScaledVector(_aim, 34).add(_v.set(0, 20, 0));
      if (this.phaseT > 1.0) this._endAttack();
    }
  }

  _venomSpray(dt, ctx) {
    this.flap = 1.15;
    this.pitch = 0.06;
    this.speed = this.stats.flySpeed * 0.75;
    // Slide across the player's front so the cloud fences off their cover.
    _aim.subVectors(this.position, ctx.playerPos).setY(0).normalize();
    _side.set(-_aim.z, 0, _aim.x).multiplyScalar(Math.sin(this.phaseT * 1.3) * this.stats.attackRange * 0.8);
    this.target
      .copy(ctx.playerPos)
      .addScaledVector(_aim, this.stats.attackRange * 0.6)
      .add(_side)
      .setY(ctx.playerPos.y + 14);
    this.roll = THREE.MathUtils.damp(this.roll, Math.cos(this.phaseT * 1.3) * 0.4, 4, dt);

    const spraying = this.phaseT > 0.7 && this.phaseT < 3.4;
    this.breath.active = spraying;
    this.breath.kind = "venom";
    this.breath.spread = 1.8;
    this.charge = spraying ? 0.6 : Math.min(1, this.charge + dt);
    this._cloudT = (this._cloudT ?? 0) + dt;
    if (spraying && this._cloudT > 0.45) {
      this._cloudT = 0;
      this.requests.push({
        type: "cloud",
        origin: this.dragon.mouthWorld(new THREE.Vector3()),
        toward: ctx.playerPos.clone(),
        damage: this.stats.damage * 0.5,
      });
    }
    if (this.phaseT > 4.0) this._endAttack();
  }

  _tailSweep(dt, ctx) {
    const dist = this.position.distanceTo(ctx.playerPos);
    if (this.phase === "windup") {
      this.flap = 1.4;
      this.pitch = 0.1;
      this.speed = this.stats.flySpeed * 1.2;
      this.target
        .copy(ctx.playerPos)
        .setY(this.world.heightAt(ctx.playerPos.x, ctx.playerPos.z) + this.clearance);
      this.charge = Math.min(1, this.charge + dt * 2);
      if (dist < this.clearance + 12 || this.phaseT > 2.8) this._phase("commit");
    } else if (this.phase === "commit") {
      this.flap = 0.3;
      this.speed = this.stats.flySpeed * 1.6;
      this.roll = THREE.MathUtils.damp(this.roll, 0.7, 6, dt);
      _aim.subVectors(ctx.playerPos, this.position).setY(0).normalize();
      this.target.copy(ctx.playerPos).addScaledVector(_aim, 26);
      if (dist < this.clearance + 10) {
        this.melee = this.stats.damage * 1.4;
        this.requests.push({ type: "shockwave", origin: this.position.clone() });
        this.hint = `${this.spec.name} sweeps its tail through the rock.`;
        this._phase("release");
      } else if (this.phaseT > 1.6) this._phase("release");
    } else {
      this.flap = 1.5;
      this.pitch = -0.3;
      this.speed = this.stats.flySpeed * 1.3;
      this.roll = THREE.MathUtils.damp(this.roll, 0, 4, dt);
      this.target.copy(this.position).add(_v.set(noise(18), 24, noise(18)));
      if (this.phaseT > 0.9) this._endAttack();
    }
  }

  _phase(next) {
    this.phase = next;
    this.phaseT = 0;
  }

  _endAttack() {
    const last = this.attackStyle;
    this.attackStyle = null;
    this.phase = "windup";
    if (this._shouldFlee()) {
      this._enter(DragonState.FLEE);
      this.hint = this.spec.lines.flee;
      return;
    }
    // A beast that finishes its pass still on top of the hunter, and still has
    // its blood up, presses the attack rather than climbing back out to its
    // standoff first. That matters for more than pressure: recovery withdraws
    // to nearly twice the attack range, so every style choice was being made
    // from a long way out and the short-range half of every repertoire — tail
    // sweeps above all — was structurally unreachable.
    // One follow-up per engagement, though. A beast allowed to chain them
    // never gives the hunter the beat between passes that every one of these
    // tells is written for, and a pack of Rustwings at borrowed aggression
    // would chain them indefinitely.
    const dist = this._playerPos ? this.position.distanceTo(this._playerPos) : Infinity;
    if (dist < 34 && !this._pressed && Math.random() < this.aggressionNow - 0.2) {
      this._pressed = true;
      this.attackStyle = last;
      this._chooseAttack({ playerPos: this._playerPos });
      this._enter(DragonState.ATTACK);
      return;
    }
    this._enter(DragonState.RECOVER);
  }

  // ----------------------------------------------------------- personality

  _shouldFlee() {
    if (!this.mind.fleeAt) return false;
    return this.dragon.hpFraction < this.mind.fleeAt;
  }

  _shouldEngage(ctx) {
    const dist = this.position.distanceTo(ctx.playerPos);
    const reach = this.stats.spotRange * (0.6 + this.aggressionNow * 0.6);
    if (dist > reach) return false;
    if (this._shouldFlee()) return false;
    // Scavengers only commit when you are dry or already busy with something else.
    if (this.mind.opportunist && !(ctx.playerVulnerable || ctx.alliesAttacking > 0)) {
      return dist < this.stats.attackRange * 1.2;
    }
    // A territorial beast will not chase far past its own ridge.
    if (this.mind.territorial > 0.8 && this.position.distanceTo(this.home) > this.stats.patrolRadius * 4) {
      return false;
    }
    return true;
  }

  /**
   * Picks an attack out of the species' repertoire.
   *
   * Disciplined species used to take the first viable style in list order, and
   * because a species writes its signature attack first, that meant almost
   * every beast on the ridge had exactly one attack: an Ashwrought dive-fired
   * twenty-two times out of twenty-two and never once used its tail, and a
   * Basalt Tyrant never did anything but lob mortars.
   *
   * Styles are now scored on three things. How well the current range suits the
   * style, so a tail sweep comes out when the beast is on top of the hunter and
   * a mortar when it is holding off. How often the species lists the style —
   * duplicate entries in the spec are how a signature attack is weighted, and
   * that intent is preserved. And against repeating whatever it just did, so a
   * long fight shows the whole repertoire. Erratic species throw the score away
   * and roll blind, which is what makes them erratic.
   */
  _chooseAttack(ctx) {
    const dist = this.position.distanceTo(ctx.playerPos);
    const pool = this.mind.attacks;
    const listed = new Map();
    for (const style of pool) listed.set(style, (listed.get(style) ?? 0) + 1);

    const viable = [];
    let pick = null;
    let best = -Infinity;
    for (const [style, count] of listed) {
      const meta = STYLE[style];
      if (!meta) continue;
      const [near, far] = meta.band;
      // Past its far edge, only the styles that close the distance themselves
      // stay on the table — the rest simply cannot reach.
      if (dist < near || (dist > far && !meta.closer)) continue;
      viable.push(style);
      const half = Math.max(1, (far - near) / 2);
      const fit = Math.max(0, 1 - Math.abs(dist - (near + far) / 2) / half);
      const score =
        fit +
        count * 0.35 +
        (meta.closer ? this.aggressionNow * 0.3 : 0) -
        (style === this.attackStyle ? 0.45 : 0);
      if (score > best) {
        best = score;
        pick = style;
      }
    }

    const list = viable.length ? viable : pool;
    if (!pick || Math.random() < this.mind.erratic) {
      pick = list[Math.floor(Math.random() * list.length)];
    }
    this.attackStyle = pick;
    this.phase = "windup";
    this._shots = 0;
    this.hint = STYLE[pick]?.tell ?? this.spec.lines.attack;
    return pick;
  }

  notifyHit(part) {
    if (!this.dragon.alive) return;
    this._hitCount++;
    this.engaged = true;
    this._flinch = Math.random() < 0.5 ? -1 : 1;
    if (this._shouldFlee()) {
      this._enter(DragonState.FLEE);
      this.hint = this.spec.lines.flee;
      return;
    }
    // Brave species shrug off glancing hits and keep their attack committed.
    const shrug = this.mind.courage * 0.7 + (this.state === DragonState.ATTACK ? 0.2 : 0);
    if (Math.random() < shrug && part !== "head") {
      this.hint = this.spec.lines.pain;
      return;
    }
    this._enter(DragonState.PAIN);
    this.hint = this.spec.lines.pain;
  }

  drainRequests() {
    if (!this.requests.length) return null;
    const out = this.requests;
    this.requests = [];
    return out;
  }
}
