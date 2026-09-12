# Reign of Fire

First-person dragon hunt on Caldera Ridge. WebGL vertical slice targeting Unreal-style grit: volcanic terrain lit by image-based lighting, six dragon species with their own personalities, and the Ashpiercer ballista.

## Play live

**Hunt (GitHub Pages):** https://machine10101-vibes.github.io/Reign-of-Fire/  
**Cinematic autoplay:** https://machine10101-vibes.github.io/Reign-of-Fire/?autoplay=1

A production build is published to the `gh-pages` branch on every push to `main`.

If that GitHub Pages URL 404s, enable it once (admin): **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch `gh-pages` / `/` (root) → Save**.

Until Pages is enabled, the same build is playable from the branch:

https://cdn.jsdelivr.net/gh/machine10101-vibes/Reign-of-Fire@gh-pages/index.html

## Play locally

```bash
npm install
npm run pipeline
npm run dev
```

Open `http://localhost:5173`. Click **Begin the hunt** (pointer lock).  
Cinematic autoplay: `http://localhost:5173/?autoplay=1`

| Input | Action |
| --- | --- |
| WASD | Move |
| Mouse | Look |
| LMB | Fire bolt |
| R | Reload |
| Shift | Sprint |
| C | Crouch |
| Space | Jump |

Standing inside the staked camp ring at the spawn point binds wounds between flights.

## The roster

Six flights, then endless mixed waves. Every beast below is generated from one
entry in [`src/game/species.js`](src/game/species.js): `build` drives its
procedural anatomy, `look` drives its materials and emissive grading, `stats`
drives its combat numbers, and `mind` drives its AI.

| Species | Epithet | Aggr. | HP | Armour | Signature behaviour |
| --- | --- | --- | --- | --- | --- |
| Emberkin | Carrion Scavenger | 0.28 | 240 | — | Opportunist. Circles wide and only lunges while your weapon is dry; breaks off at 55% health |
| Cinderwyrm | Forge-Hot Harrier | 0.95 | 620 | — | Erratic strafing passes with almost no wind-up. Never disengages, but thin-skinned |
| Ashwrought | Obsidian Tyrant | 0.72 | 1100 | 12% | Territorial. Holds its patrol ring, then commits to long dive-fire runs |
| Sulfurmaw | Fumarole Brood | 0.60 | 1000 | 10% | Sprays caustic aerosol that keeps burning after the pass, fencing you out of cover |
| Pale Stalker | Silent Ambusher | 0.62 | 900 | 18% | Stops flapping to go silent and shadows you for a long time, then closes in one lunge |
| Basalt Tyrant | Walking Siege | 0.55 | 2600 | 55% | Too heavy to dive. Hovers at range lobbing lava mortars; bolts glance off everything but the skull |

Attack styles implemented: dive fire, strafe run, hover barrage, lava mortar,
ambush lunge, venom spray, tail sweep. A beast picks between the styles it knows
by range band, favouring its primary unless its `erratic` weight rolls it off.
`patience` sets wind-up and cooldown length, `courage` decides whether a bolt
interrupts a committed attack, `territorial` decides whether it holds a ring or
shadows you, and `fleeAt` sets the health fraction it runs at.

## Rendering

The frame is assembled in this order, and the order matters:

1. Scene pass into a linear HDR buffer, lit by a sun, a hemisphere fill, a cool
   rim light and image-based lighting baked from the sky plate through
   `PMREMGenerator`.
2. Bloom and the motion-trail afterimage, which belong on linear HDR values.
3. `OutputPass` — ACES filmic tone mapping and the sRGB transfer.
4. The composite grade: warm ash grading, radial chromatic dispersion, vignette
   and luminance-weighted film grain. These are photographic effects and have to
   run on display-referred pixels, not linear ones.

Terrain samples its albedo and roughness twice, once for macro shape and once at
eight times the frequency for detail underfoot, and its lava glow is gated on the
crack mask so the emissive cannot out-radiate the rock. Dragon hides gate their
molten grout the same way, pooling heat into bands and along the belly, and tie
scale tiling to body size so a Basalt Tyrant is not wearing an Emberkin's scales
scaled up four times.

Quality is adaptive across four tiers. Frame time is measured off the wall clock
rather than the simulation step, because the simulation clamps its `dt` and that
clamp would hide every frame slower than it. Each tier sets shadow resolution,
particle budgets, prop shadow casting, post-processing passes and a render scale
that both the renderer and the composer honour.

## Tests

```bash
npm test        # asset, rig and behaviour checks
npm run roster  # per-species behaviour report
```

- `scripts/validate.mjs` — every material set the renderer asks for exists as
  WebP, and the species table is well formed.
- `scripts/rig-test.mjs` — builds every species and measures the skeleton: wing
  tips must travel and stay in phase, the skull must be the first hitbox tested,
  headshots must out-damage body shots.
- `scripts/hunt-test.mjs` — drives the real `Hunt`, `DragonAI` and `Combat` at a
  fixed timestep with no renderer attached. Every species must commit to an
  attack, stay inside its own repertoire, draw blood, and die to sustained fire;
  a 0.95-aggression beast must out-damage a 0.28 one; cowards must break off
  when wounded and the fearless must not.

`npm run roster` prints engagement share, attack commitments, breath time and
damage per species, which is how the personality weights get checked against
behaviour instead of being taken on faith.

## Milestones in this slice

1. **Visual target & pipeline** — `art/`, `docs/STYLE_GUIDE.md`, PBR bake, OBJ/animation export, Blender bpy script
2. **Mechanics** — FPS controller, camera shake, footfall weight, motion blur, species AI, ballistics, hitboxes, fire/venom/blood particles
3. **World** — volcanic ridge, obsidian spires, burnt groves, bone piles, ruins, lava pools, erupting volcano, hunter's camp, ash lighting, adaptive 60 FPS quality ladder

Blender MCP is not attached to this runtime. `pipeline/blender_scene.py` is the offline reconstruction entry when Blender is installed.

## Layout

```
art/                 visual target, concepts, source albedos, height maps, OBJ/animation exports
docs/STYLE_GUIDE.md  art bible
pipeline/            PBR baker, OBJ export, Blender scene
public/assets/       runtime textures (WebP) + title art
src/game/            playable Three.js slice
```

Only the six maps the renderer samples are published, as WebP q90. Source
albedos, height maps and the offline OBJ exports live under `art/` and stay out
of the web payload.
