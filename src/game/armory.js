/**
 * The camp armoury. Four weapons, three upgrade steps each.
 *
 * Gold is the bounty the hunt already pays. Prices sit on the first few
 * flights: two Emberkin are 240g, so Emberhail is a first-camp purchase and
 * the Hellharpoon is a mid-ridge one. Upgrades are the sink after that.
 *
 * `kind` chooses the viewmodel builder. Stats are what Combat and the
 * weapon's own fire/reload actually read — CONFIG.weapon stays the
 * Ashpiercer's first tier so the older tests keep their numbers.
 */
export const WEAPONS = {
  ashpiercer: {
    id: "ashpiercer",
    name: "Ashpiercer",
    epithet: "Siege ballista",
    kind: "ballista",
    ammo: "Bolts",
    cost: 0,
    starter: true,
    blurb: "The ridge's first answer to a dragon. A hybrid siege prod that hits like a thrown anvil and reloads like one.",
    pose: { pos: [0.14, -0.16, -0.78], rot: [-0.2, -0.02, 0.06] },
    upgrades: [
      { cost: 0, label: "Worn", damage: 85, bolts: 8, muzzle: 92, gravity: 9.2, reload: 2.15, recoil: 0.034, cooldown: 0.62, mass: 4.6, pellets: 1, spread: 0 },
      { cost: 400, label: "Tempered", damage: 105, bolts: 9, muzzle: 100, gravity: 8.6, reload: 1.95, recoil: 0.03, cooldown: 0.56, mass: 4.8, pellets: 1, spread: 0 },
      { cost: 850, label: "Siege-proof", damage: 130, bolts: 10, muzzle: 108, gravity: 8.0, reload: 1.75, recoil: 0.028, cooldown: 0.5, mass: 5.1, pellets: 1, spread: 0 },
    ],
  },
  emberhail: {
    id: "emberhail",
    name: "Emberhail",
    epithet: "Dragon-shot lock",
    kind: "scatter",
    ammo: "Shot",
    cost: 200,
    blurb: "A flared lock that throws a fist of iron into whatever is close enough to smell. Useless past forty metres; ruinous inside twenty.",
    pose: { pos: [0.16, -0.15, -0.7], rot: [-0.16, -0.03, 0.05] },
    upgrades: [
      { cost: 0, label: "Field", damage: 24, bolts: 5, muzzle: 64, gravity: 14, reload: 2.4, recoil: 0.05, cooldown: 0.88, mass: 3.8, pellets: 7, spread: 0.075 },
      { cost: 360, label: "Packed", damage: 30, bolts: 6, muzzle: 70, gravity: 13, reload: 2.15, recoil: 0.046, cooldown: 0.78, mass: 4.0, pellets: 8, spread: 0.068 },
      { cost: 720, label: "Furnace", damage: 36, bolts: 7, muzzle: 76, gravity: 12, reload: 1.9, recoil: 0.042, cooldown: 0.7, mass: 4.2, pellets: 9, spread: 0.06 },
    ],
  },
  widowcoil: {
    id: "widowcoil",
    name: "Widow's Coil",
    epithet: "Repeating arbalest",
    kind: "repeater",
    ammo: "Quarrels",
    cost: 520,
    blurb: "A boxed prod that feeds itself. Lighter bolts, a faster string, and a magazine that turns a fly-over into a conversation.",
    pose: { pos: [0.15, -0.15, -0.72], rot: [-0.18, -0.02, 0.05] },
    upgrades: [
      { cost: 0, label: "Wound", damage: 48, bolts: 12, muzzle: 86, gravity: 9.6, reload: 1.7, recoil: 0.022, cooldown: 0.28, mass: 3.2, pellets: 1, spread: 0.008 },
      { cost: 480, label: "Cycled", damage: 58, bolts: 14, muzzle: 92, gravity: 9.0, reload: 1.5, recoil: 0.02, cooldown: 0.24, mass: 3.3, pellets: 1, spread: 0.006 },
      { cost: 960, label: "Widow-made", damage: 70, bolts: 16, muzzle: 98, gravity: 8.4, reload: 1.32, recoil: 0.018, cooldown: 0.2, mass: 3.4, pellets: 1, spread: 0.005 },
    ],
  },
  hellharpoon: {
    id: "hellharpoon",
    name: "Hellharpoon",
    epithet: "Fire lance",
    kind: "lance",
    ammo: "Harpoons",
    cost: 880,
    blurb: "One spear, thrown on a column of furnace gas. Slow to seat, heavy in the hands, and the only thing on the ridge a Basalt Tyrant respects.",
    pose: { pos: [0.13, -0.17, -0.86], rot: [-0.14, -0.02, 0.04] },
    upgrades: [
      { cost: 0, label: "Forged", damage: 145, bolts: 4, muzzle: 78, gravity: 10.5, reload: 2.8, recoil: 0.055, cooldown: 1.05, mass: 6.2, pellets: 1, spread: 0 },
      { cost: 700, label: "Vented", damage: 175, bolts: 5, muzzle: 86, gravity: 9.8, reload: 2.5, recoil: 0.05, cooldown: 0.92, mass: 6.4, pellets: 1, spread: 0 },
      { cost: 1400, label: "Tyrant-iron", damage: 210, bolts: 6, muzzle: 94, gravity: 9.2, reload: 2.25, recoil: 0.046, cooldown: 0.82, mass: 6.6, pellets: 1, spread: 0 },
    ],
  },
};

export const WEAPON_ORDER = ["ashpiercer", "emberhail", "widowcoil", "hellharpoon"];

export function weaponById(id) {
  return WEAPONS[id] ?? WEAPONS.ashpiercer;
}

export function tierStats(spec, tier = 0) {
  const steps = spec.upgrades;
  const i = Math.max(0, Math.min(tier | 0, steps.length - 1));
  return steps[i];
}

export function nextUpgrade(spec, tier = 0) {
  return spec.upgrades[tier + 1] ?? null;
}

export function maxTier(spec) {
  return spec.upgrades.length - 1;
}
