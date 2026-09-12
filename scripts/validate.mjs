import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "public/assets/textures/pbr/manifest.json",
  "public/assets/models/manifest.json",
  "public/assets/models/weapon_ballista.obj",
  "public/assets/models/dragon_ashwrought_bindpose.obj",
  "public/assets/models/terrain_ridge.obj",
  "public/assets/animations/dragon_ashwrought.json",
  "art/visual-target/visual_target_fps.png",
  "docs/STYLE_GUIDE.md",
  "src/game/Game.js",
];

let failed = 0;
for (const file of required) {
  const path = resolve(file);
  if (!existsSync(path)) {
    console.error("missing", file);
    failed++;
    continue;
  }
  if (file.endsWith(".json")) {
    JSON.parse(readFileSync(path, "utf8"));
  }
}

if (failed) {
  console.error(`validate failed: ${failed} missing`);
  process.exit(1);
}
console.log("Reign of Fire asset/pipeline validation passed.");
