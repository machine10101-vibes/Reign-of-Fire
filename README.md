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
| Pale Stalker | Vylkros | 0.62 | 900 | 18% | Stops flapping to go silent and shadows you for a long time, then closes in one lunge |
| Basalt Tyrant | Walking Siege | 0.55 | 2600 | 55% | Too heavy to dive. Hovers at range lobbing lava mortars; bolts glance off everything but the skull |

Attack styles implemented: dive fire, strafe run, hover barrage, lava mortar,
ambush lunge, venom spray, tail sweep. A beast picks between the styles it knows
by range band, favouring its primary unless its `erratic` weight rolls it off.
`patience` sets wind-up and cooldown length, `courage` decides whether a bolt
interrupts a committed attack, `territorial` decides whether it holds a ring or
shadows you, and `fleeAt` sets the health fraction it runs at.

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
