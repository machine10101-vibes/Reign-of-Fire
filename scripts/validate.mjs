import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

import { SPECIES, SPECIES_ORDER, ATTACK } from "../src/game/species.js";

// Runtime maps the browser actually fetches, per baked material set.
const RUNTIME_MAPS = ["albedo", "normal", "roughness", "metallic", "ao", "emissive"];
const CORE_PACKS = [
  "dragon_scales",
  "dragon_wing",
  "terrain_rock",
  "weapon_metal",
  "weapon_wood",
  "leather_glove",
  "lava",
  "obsidian",
  "bone",
  "burnt_bark",
];

const required = [
  "public/assets/textures/pbr/manifest.json",
  "public/assets/textures/pbr/sky_ash_storm.webp",
  "public/assets/art/visual_target_fps.webp",
  "art/models/manifest.json",
  "art/models/weapon_ballista.obj",
  "art/models/dragon_ashwrought_bindpose.obj",
  "art/models/terrain_ridge.obj",
  "art/animations/dragon_ashwrought.json",
  "art/visual-target/visual_target_fps.png",
  "docs/STYLE_GUIDE.md",
  "src/game/Game.js",
  "src/game/Hunt.js",
  "src/game/species.js",
];

const packs = new Set(CORE_PACKS);
for (const id of Object.keys(SPECIES)) packs.add(SPECIES[id].look.pack);
for (const pack of packs) {
  for (const map of RUNTIME_MAPS) required.push(`public/assets/textures/pbr/${pack}_${map}.webp`);
}

const errors = [];
for (const file of required) {
  const path = resolve(file);
  if (!existsSync(path)) {
    errors.push(`missing ${file}`);
    continue;
  }
  if (file.endsWith(".json")) JSON.parse(readFileSync(path, "utf8"));
}

// The species table is data the renderer and AI both trust; check its shape.
const styles = new Set(Object.values(ATTACK));
for (const id of Object.keys(SPECIES)) {
  const s = SPECIES[id];
  if (s.id !== id) errors.push(`${id}: id field does not match its key`);
  if (!SPECIES_ORDER.includes(id)) errors.push(`${id}: absent from SPECIES_ORDER`);
  for (const key of ["build", "look", "stats", "mind", "lines"]) {
    if (!s[key]) errors.push(`${id}: missing ${key} block`);
  }
  if (!s.mind?.attacks?.length) errors.push(`${id}: no attack styles`);
  for (const style of s.mind?.attacks ?? []) {
    if (!styles.has(style)) errors.push(`${id}: unknown attack style ${style}`);
  }
  if (!(s.mind?.aggression >= 0 && s.mind?.aggression <= 1)) {
    errors.push(`${id}: aggression must be 0..1`);
  }
  for (const line of ["idle", "spot", "attack", "pain", "flee", "dead"]) {
    if (!s.lines?.[line]) errors.push(`${id}: missing line "${line}"`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(e);
  console.error(`validate failed: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(
  `Reign of Fire validation passed — ${Object.keys(SPECIES).length} species, ${packs.size} material sets.`
);
