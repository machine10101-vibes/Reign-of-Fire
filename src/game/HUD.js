const AGGRESSION_WORDS = [
  [0.85, "Berserk"],
  [0.7, "Relentless"],
  [0.5, "Committed"],
  [0.35, "Cautious"],
  [0, "Skittish"],
];

function aggressionWord(value) {
  for (const [floor, word] of AGGRESSION_WORDS) if (value >= floor) return word;
  return "Skittish";
}

export class HUD {
  constructor() {
    this.hp = document.getElementById("hp-fill");
    this.bolts = document.getElementById("bolts");
    this.reload = document.getElementById("reload");
    this.reloadFill = document.getElementById("reload-fill");
    this.beast = document.getElementById("beast-fill");
    this.beastPanel = document.getElementById("beast");
    this.beastName = document.getElementById("beast-name");
    this.beastEpithet = document.getElementById("beast-epithet");
    this.beastState = document.getElementById("beast-state");
    this.beastWave = document.getElementById("beast-wave");
    this.beastAggr = document.getElementById("beast-aggr");
    this.beastAggrLabel = document.getElementById("beast-aggr-label");
    this.threats = document.getElementById("threats");
    this.killLog = document.getElementById("kill-log");
    this.bounty = document.getElementById("bounty");
    this.fps = document.getElementById("fps");
    this.quality = document.getElementById("quality");
    this.hint = document.getElementById("hint");
    this.cross = document.getElementById("crosshair");
    this.hit = document.getElementById("hitmarker");
    this.heat = document.getElementById("heat");
    this.hud = document.getElementById("hud");
    this.title = document.getElementById("title-screen");
    this.downed = document.getElementById("downed");
    this.downedLine = document.getElementById("downed-line");
    this._species = null;
    this._threatKey = "";
  }

  showGame() {
    this.title.classList.add("hidden");
    this.hud.classList.remove("hidden");
  }

  /** `null` clears the death overlay; a species name puts it up. */
  showDowned(killedBy) {
    if (!this.downed) return;
    this.downed.classList.toggle("hidden", !killedBy);
    if (killedBy) this.downedLine.textContent = `Killed by a ${killedBy}`;
  }

  setLoading(fraction) {
    const fill = document.getElementById("loading-fill");
    if (fill) fill.style.width = `${Math.round(fraction * 100)}%`;
  }

  ready() {
    const btn = document.getElementById("hunt-btn");
    if (!btn) return;
    btn.disabled = false;
    btn.textContent = "Begin the hunt";
    document.getElementById("loading")?.classList.add("hidden");
  }

  /** The title screen codex is generated from the species table itself. */
  renderCodex(species, order) {
    const host = document.getElementById("codex");
    if (!host) return;
    host.innerHTML = order
      .map((id) => {
        const s = species[id];
        const pct = Math.round(s.mind.aggression * 100);
        return `<div class="codex-row">
          <span class="codex-name">${s.name}</span>
          <span class="codex-epithet">${s.epithet}</span>
          <span class="codex-aggr" title="Aggression ${pct}%">
            <i style="width:${pct}%"></i>
          </span>
          <span class="codex-tier">T${s.tier}</span>
        </div>`;
      })
      .join("");
  }

  _renderLog(log) {
    this.killLog.innerHTML = log.map((l) => `<li class="${l.kind}">${l.text}</li>`).join("");
  }

  _renderThreats(entries, playerPos) {
    const key = entries.map((e) => `${e.spec.id}${e.ai.stateLabel}`).join("|");
    if (key === this._threatKey) return;
    this._threatKey = key;
    this.threats.innerHTML = entries
      .map((e) => {
        const dist = Math.round(e.dragon.root.position.distanceTo(playerPos));
        const hp = Math.round(e.dragon.hpFraction * 100);
        return `<div class="threat ${e.ai.state}">
          <span class="threat-name">${e.spec.name}</span>
          <span class="threat-state">${e.ai.stateLabel}</span>
          <span class="threat-dist">${dist}m</span>
          <span class="threat-hp">${hp}%</span>
        </div>`;
      })
      .join("");
  }

  update(state) {
    const {
      health,
      bolts,
      maxBolts,
      focus,
      alive,
      playerPos,
      flightLabel,
      flightIndex,
      totalFlights,
      bounty,
      log,
      logDirty,
      fps,
      quality,
      hint,
      hot,
      hit,
      hitPart,
      hitWeight,
      heat,
      reloading,
      reloadProgress,
    } = state;

    this.hp.style.width = `${Math.max(0, health)}%`;
    this.bolts.textContent = `${bolts} / ${maxBolts}`;
    // Empty and reloading are the two states the dragons watch for — the AI
    // presses the attack during both — so the hunter has to be able to see
    // them too.
    this.bolts.classList.toggle("empty", bolts === 0 && !reloading);
    this.reload.classList.toggle("active", !!reloading);
    if (reloading) this.reloadFill.style.width = `${Math.round(reloadProgress * 100)}%`;
    this.fps.textContent = `${Math.round(fps)} FPS`;
    this.quality.textContent = quality;
    this.bounty.textContent = `${bounty} gold`;
    if (hint) this.hint.textContent = hint;
    this.cross.classList.toggle("hot", !!hot);
    this.cross.classList.toggle("crit", hitPart === "head");
    this.heat.style.opacity = heat ? "1" : "0";
    this.hit.style.opacity = hit ? "1" : "0";
    // Armour varies enormously across the roster, so how much a hit actually
    // took off is worth telling apart from the fact that it landed.
    if (hit) this.hit.style.transform = `translate(-50%, -50%) scale(${(0.8 + hitWeight * 0.7).toFixed(2)})`;

    if (logDirty) this._renderLog(log);
    this._renderThreats(alive, playerPos);

    if (focus) {
      this.beastPanel.style.opacity = "1";
      if (this._species !== focus.spec.id) {
        this._species = focus.spec.id;
        this.beastName.textContent = focus.spec.name;
        this.beastEpithet.textContent = focus.spec.epithet;
        this.beastPanel.dataset.tier = focus.spec.tier;
      }
      this.beast.style.width = `${focus.dragon.hpFraction * 100}%`;
      this.beastState.textContent = focus.ai.stateLabel;
      const aggr = focus.ai.aggressionNow;
      this.beastAggr.style.width = `${aggr * 100}%`;
      this.beastAggrLabel.textContent = aggressionWord(aggr);
      this.beastWave.textContent = `${flightLabel} · ${Math.min(flightIndex + 1, totalFlights)}/${totalFlights}`;
    } else {
      this.beastPanel.style.opacity = "0.35";
      this.beastState.textContent = "clear";
      this.beastWave.textContent = flightLabel;
    }
  }
}
