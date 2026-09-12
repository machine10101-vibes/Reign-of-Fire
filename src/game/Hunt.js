import * as THREE from "three";
import { CONFIG } from "./config.js";
import { SPECIES } from "./species.js";
import { Dragon } from "./Dragon.js";
import { DragonAI } from "./DragonAI.js";

const _v = new THREE.Vector3();

/**
 * Owns the live roster: which species are in the air, where they spawn, what
 * their AI asks the combat layer to do, and the flight-by-flight progression.
 */
export class Hunt {
  constructor(scene, world, textures, audio) {
    this.scene = scene;
    this.world = world;
    this.textures = textures;
    this.audio = audio;
    this.entries = [];
    this.flightIndex = -1;
    this.kills = [];
    this.bounty = 0;
    this.pendingRequests = [];
    this.log = [];
    this.logDirty = false;
    this.flightLabel = "";
    this.breathing = false;
    this.breathSources = [];
    this._loading = false;
    this._clearT = 0;
  }

  get flights() {
    return CONFIG.hunt.flights;
  }

  get totalFlights() {
    return this.flights.length;
  }

  get alive() {
    return this.entries.filter((e) => e.dragon.alive);
  }

  /** Rebuilt only when the roster changes; this list is walked twice a frame. */
  get hitboxes() {
    if (this._boxes) return this._boxes;
    const out = [];
    for (const e of this.entries) if (e.dragon.alive) out.push(...e.dragon.hitboxes);
    this._boxes = out;
    return out;
  }

  _invalidate() {
    this._boxes = null;
  }

  /** The beast the HUD should describe: whoever is actually committed, else nearest. */
  focus(playerPos) {
    let best = null;
    let bestScore = -Infinity;
    for (const e of this.entries) {
      if (!e.dragon.alive) continue;
      const dist = e.dragon.root.position.distanceTo(playerPos);
      const committed = e.ai.state === "attack" ? 400 : e.ai.engaged ? 120 : 0;
      const score = committed - dist;
      if (score > bestScore) {
        bestScore = score;
        best = e;
      }
    }
    return best;
  }

  async begin() {
    await this.nextFlight();
  }

  async nextFlight() {
    if (this._loading) return;
    this.flightIndex++;
    const flight = this.flights[Math.min(this.flightIndex, this.flights.length - 1)];
    const looping = this.flightIndex >= this.flights.length;
    const roster = looping ? this._endlessRoster() : flight.species;
    this.flightLabel = looping
      ? `The ridge answers · wave ${this.flightIndex - this.flights.length + 2}`
      : flight.label;

    this._loading = true;
    await Promise.all([...new Set(roster)].map((id) => this.textures.ensure(SPECIES[id].look.pack)));
    for (let i = 0; i < roster.length; i++) this._spawn(roster[i], i, roster.length);
    this._loading = false;
    this.pushLog(looping ? this.flightLabel : `Flight ${this.flightIndex + 1}: ${flight.label}`, "flight");
  }

  _endlessRoster() {
    const pool = Object.keys(SPECIES);
    const size = 2 + Math.min(3, this.flightIndex - this.flights.length);
    return Array.from({ length: size }, () => pool[Math.floor(Math.random() * pool.length)]);
  }

  _spawn(id, index, total) {
    const spec = SPECIES[id];
    const dragon = new Dragon(spec, this.textures);
    const angle = (index / Math.max(1, total)) * Math.PI * 2 + Math.random() * 0.9;
    const radius = 70 + Math.random() * 45;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius - 10;
    const ground = this.world.heightAt(x, z);
    const home = new THREE.Vector3(x, ground + spec.stats.patrolHeight, z);
    dragon.root.position.copy(home);
    this.scene.add(dragon.root);
    const ai = new DragonAI(dragon, this.world, home);
    this.entries.push({ dragon, ai, spec, scored: false });
    if (dragon.glow && this.quality === "low") dragon.glow.visible = false;
    this._invalidate();
  }

  /** A glow light per beast adds up fast, so drop them on weaker hardware. */
  setQuality(tier) {
    this.quality = tier;
    for (const e of this.entries) if (e.dragon.glow) e.dragon.glow.visible = tier !== "low";
  }

  pushLog(text, kind = "info") {
    this.log.unshift({ text, kind });
    if (this.log.length > 5) this.log.pop();
    this.logDirty = true;
  }

  update(dt, player, weapon) {
    const playerVulnerable = weapon.bolts === 0 || weapon.reloading;
    let alliesAttacking = 0;
    for (const e of this.entries) if (e.ai.state === "attack") alliesAttacking++;

    const ctx = {
      playerPos: player.position,
      playerVelocity: player.velocity,
      playerVulnerable,
      alliesAttacking,
    };

    this.breathing = false;
    this.breathSources = [];
    let meleeDamage = 0;

    for (const e of this.entries) {
      e.ai.update(dt, ctx);
      if (e.ai.breath.active) {
        this.breathing = true;
        this.breathSources.push(e);
      }
      if (e.ai.melee > 0) meleeDamage += e.ai.melee;
      const reqs = e.ai.drainRequests();
      if (reqs) for (const r of reqs) this.pendingRequests.push(r);

      if (!e.dragon.alive && !e.scored) {
        e.scored = true;
        this.bounty += e.spec.bounty;
        this.kills.push(e.spec.id);
        this.pushLog(`${e.spec.name} down · +${e.spec.bounty}g`, "kill");
        this.audio.death();
        this._invalidate();
      }
    }

    if (meleeDamage > 0) {
      player.applyDamage(meleeDamage);
      player.addShake(0.18);
    }

    this._cull(dt);
    this._progress(dt);
    return ctx;
  }

  /** Corpses linger briefly for the kill read, then free their GPU memory. */
  _cull(dt) {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const e = this.entries[i];
      if (e.dragon.alive) continue;
      e.corpseT = (e.corpseT ?? 0) + dt;
      if (e.corpseT > CONFIG.hunt.corpseLinger) {
        this.scene.remove(e.dragon.root);
        e.dragon.dispose();
        this.entries.splice(i, 1);
        this._invalidate();
      }
    }
  }

  _progress(dt) {
    if (this._loading) return;
    if (this.alive.length > 0) {
      this._clearT = 0;
      return;
    }
    this._clearT += dt;
    if (this._clearT > CONFIG.hunt.flightGap) {
      this._clearT = 0;
      this.nextFlight();
    }
  }

  drainRequests() {
    if (!this.pendingRequests.length) return [];
    const out = this.pendingRequests;
    this.pendingRequests = [];
    return out;
  }

  nearestDistance(playerPos) {
    let min = Infinity;
    for (const e of this.entries) {
      if (!e.dragon.alive) continue;
      min = Math.min(min, _v.copy(e.dragon.root.position).distanceTo(playerPos));
    }
    return min;
  }
}
