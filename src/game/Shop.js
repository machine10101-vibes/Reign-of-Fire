import { WEAPON_ORDER, weaponById, nextUpgrade, maxTier, tierStats } from "./armory.js";

/**
 * The camp armoury: owned weapons, their tiers, and which one is in the hand.
 *
 * Gold is the hunt's bounty. Spending it is the only reason that number
 * exists beyond a score. The overlay only binds if the page has a #shop.
 */
export class Shop {
  constructor() {
    this.open = false;
    this.owned = { ashpiercer: 0 };
    this.equipped = "ashpiercer";
    this._root = null;
    this._onChange = null;
  }

  bind(onChange) {
    this._onChange = onChange;
    this._root = document.getElementById("shop");
    if (!this._root) return;
    this._root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-shop]");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const act = btn.getAttribute("data-shop");
      if (act === "close") this.close();
      else if (act === "buy") this.buy(id);
      else if (act === "upgrade") this.upgrade(id);
      else if (act === "equip") this.equip(id);
    });
  }

  toggle(atCamp) {
    if (this.open) this.close();
    else if (atCamp) this.openShop();
    return this.open;
  }

  openShop() {
    this.open = true;
    document.body.classList.add("shop-open");
    document.exitPointerLock?.();
    this.render();
  }

  close() {
    if (!this.open) return;
    this.open = false;
    document.body.classList.remove("shop-open");
    this._root?.classList.add("hidden");
  }

  isOwned(id) {
    return Object.hasOwn(this.owned, id);
  }

  tierOf(id) {
    return this.owned[id] ?? -1;
  }

  buy(id, hunt = this.hunt) {
    const spec = weaponById(id);
    if (this.isOwned(id)) return { ok: false, reason: "owned" };
    if (!hunt || hunt.bounty < spec.cost) return { ok: false, reason: "gold" };
    if (!hunt.spend(spec.cost, `Bought ${spec.name} · −${spec.cost}g`)) {
      return { ok: false, reason: "gold" };
    }
    this.owned[id] = 0;
    this.equip(id);
    this.render();
    return { ok: true };
  }

  upgrade(id, hunt = this.hunt) {
    if (!this.isOwned(id)) return { ok: false, reason: "unowned" };
    const spec = weaponById(id);
    const tier = this.owned[id];
    const next = nextUpgrade(spec, tier);
    if (!next) return { ok: false, reason: "max" };
    if (!hunt || hunt.bounty < next.cost) return { ok: false, reason: "gold" };
    if (!hunt.spend(next.cost, `${spec.name} ${next.label} · −${next.cost}g`)) {
      return { ok: false, reason: "gold" };
    }
    this.owned[id] = tier + 1;
    if (this.equipped === id) this._emit();
    this.render();
    return { ok: true };
  }

  equip(id) {
    if (!this.isOwned(id)) return { ok: false, reason: "unowned" };
    if (this.equipped === id) return { ok: true };
    this.equipped = id;
    this._emit();
    this.render();
    return { ok: true };
  }

  _emit() {
    this._onChange?.(this.equipped, this.owned[this.equipped] ?? 0);
  }

  attachHunt(hunt) {
    this.hunt = hunt;
  }

  render() {
    if (!this._root) return;
    const hunt = this.hunt;
    const gold = hunt?.bounty ?? 0;
    this._root.classList.toggle("hidden", !this.open);
    const list = this._root.querySelector("#shop-list");
    const purse = this._root.querySelector("#shop-gold");
    if (purse) purse.textContent = `${gold} gold`;
    if (!list) return;
    list.innerHTML = WEAPON_ORDER.map((id) => this._card(weaponById(id), gold)).join("");
  }

  _card(spec, gold) {
    const owned = this.isOwned(spec.id);
    const tier = this.tierOf(spec.id);
    const stats = owned ? tierStats(spec, tier) : spec.upgrades[0];
    const next = owned ? nextUpgrade(spec, tier) : null;
    const equipped = this.equipped === spec.id;
    const maxed = owned && tier >= maxTier(spec);

    let action = "";
    if (!owned) {
      const can = gold >= spec.cost;
      action = `<button data-shop="buy" data-id="${spec.id}" ${can ? "" : "disabled"}>Buy ${spec.cost}g</button>`;
    } else {
      const bits = [];
      if (!equipped) bits.push(`<button data-shop="equip" data-id="${spec.id}">Equip</button>`);
      else bits.push(`<span class="shop-equipped">In hand</span>`);
      if (next) {
        const can = gold >= next.cost;
        bits.push(
          `<button data-shop="upgrade" data-id="${spec.id}" ${can ? "" : "disabled"}>Upgrade ${next.label} · ${next.cost}g</button>`
        );
      } else if (maxed) {
        bits.push(`<span class="shop-max">Fully fitted</span>`);
      }
      action = bits.join("");
    }

    const tierLabel = owned ? spec.upgrades[tier].label : "Unbought";
    return `<article class="shop-card ${equipped ? "is-equipped" : ""} ${owned ? "is-owned" : ""}">
      <header>
        <h3>${spec.name}</h3>
        <p class="shop-epithet">${spec.epithet}</p>
        <p class="shop-tier">${tierLabel}</p>
      </header>
      <p class="shop-blurb">${spec.blurb}</p>
      <ul class="shop-stats">
        <li>${stats.damage} dmg${stats.pellets > 1 ? ` × ${stats.pellets}` : ""}</li>
        <li>${stats.bolts} ${spec.ammo.toLowerCase()}</li>
        <li>${Math.round(stats.muzzle)} m/s</li>
        <li>${stats.reload.toFixed(1)}s wind</li>
      </ul>
      <div class="shop-actions">${action}</div>
    </article>`;
  }
}
