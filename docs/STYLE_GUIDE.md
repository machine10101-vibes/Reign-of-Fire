# Reign of Fire — Visual Target & Asset Style Guide

## North-star screenshot

First-person cinematic still: `art/visual-target/visual_target_fps.png`

The playable vertical slice must read as **Unreal Engine 5 grit**, not fantasy illustrator gloss.

| Pillar | Spec |
| --- | --- |
| Camera | Hunter eye-height (~1.72 m), 75° FOV, slight weapon occupancy in lower third |
| Palette | Charcoal / basalt, ember orange `#ff6a1a`, blood rust, ash cyan-grey highlights |
| Contrast | High-key embers in a low-key ash storm. Blacks crush; lava is the only true highlight |
| Motion | Wing-tip and ash motion blur, heavy footfall, ballista recoil kick |
| Weapon | Hybrid siege ballista × anti-materiel rifle. Steel cable, scorched oak, leather wrap, barbed bolt |

## Lighting model

- **Key:** low directional sun raking through the ash at ~30°, `#ffa561`. Long
  shadows are what sell the ridge as volcanic; never light it from overhead.
- **Ambient:** image-based. The sky dome's ash-storm plate is converted to a
  PMREM environment map, so steel, obsidian and wet basalt reflect the real
  horizon instead of a flat ambient term. Metals get `envMapIntensity` ≥ 1.0,
  rough rock stays ≤ 0.35 so it does not wash out.
- **Fill:** lava bounce from pool point lights, plus a cold `#4a5a78` rim from
  the opposite side to separate silhouettes from the fog.
- **Grade:** ACES filmic in the renderer, then a warm ash grade in post —
  shadows lifted toward brown, highlights pulled to amber, saturation held back
  slightly so emissive lava stays the brightest thing in frame. Grain is
  luminance-weighted into the shadows the way film stock behaves.

## Creature language

Concept: `art/concepts/dragon_model_sheet.png`

Every species is generated from one entry in `src/game/species.js`. The shared
rig is: chest lathe → neck×2-3 → skull/jaw with teeth; dorsal spine spikes;
tail×4-7 with a barb; two wings (shoulder, upper arm, scalloped membrane, three
finger bones, tip hook); four legs (thigh, shin, foot, three talons).

Species read apart at silhouette distance first, colour second:

| Species | Silhouette cue | Surface |
| --- | --- | --- |
| Emberkin | Smallest, long thin neck, no spikes | Metallic ember flecks, dull glow |
| Cinderwyrm | Widest wingspan for its body, four short horns | Forge-hot, highest emissive |
| Ashwrought | Baseline proportions, heavy spikes | Obsidian plates, molten capillary cracks |
| Sulfurmaw | Longest neck, oversized head, no spikes | Yellow-green crust, toxic emissive |
| Pale Stalker | Longest tail, four tall horns | Ash-bleached, cold blue eyes, almost no glow |
| Basalt Tyrant | Squat and huge, six horns, short wings | Cooled columnar rock, matte, barely glows |

Weak points are shared: head 3.0×, neck 1.6×, body 1.0×, tail 0.7×, wings 0.55×.
Bolts resolve against the highest multiplier first, so the skull is always
reachable even though the torso sphere overlaps it. Armour soaks a flat fraction
everywhere except the skull, which soaks a quarter as much — the Basalt Tyrant's
55% armour is the reason its only real weak point is the head.

## Weapon — Ashpiercer Ballista

Concept: `art/concepts/weapon_ballista_concept.png`

- First-person only. Left hand on prod, right on grip.
- Ballistics: heavy bolt, 92 m/s, gravity 9.2, mild drop past 40 m
- Impact: scale chips + dark arterial spray + ember sparks

## Environment — Caldera Ridge

- Craggy displacement terrain (fbm + ridge noise + caldera basin), lava in the
  negative space, ash bleaching the peaks via vertex colour
- Terrain samples its own albedo and roughness a second time at 8× frequency so
  the ground holds detail underfoot without a larger texture
- Props, all instanced and scattered through a slope-and-elevation aware
  sampler: fractured basalt boulders, obsidian spire clusters, burnt dead
  groves, dragon bone piles, toppled columnar ruins, animated lava pools
- Landmarks: an erupting volcano on the horizon with a drifting plume, and the
  hunter's camp at the spawn point (staked trophy skulls, hide tarp, bonfire)
- Ash particles (large, slow) + embers (small, rising), both recycled around the
  camera so the field never thins out; fire and venom use soft radial splats
- Fog density high, warm in-scatter, cold out-scatter

## Material sets

Fifteen baked sets. Source albedos live in `art/textures/source/`; the baker
writes the six maps the renderer samples as WebP q90 into
`public/assets/textures/pbr/`, and height maps to `art/textures/height/` for
offline/Blender use only.

| Set | Used by |
| --- | --- |
| `dragon_scales`, `dragon_wing` | Ashwrought body, all wing membranes |
| `scales_cinder`, `scales_basalt`, `scales_pale`, `scales_sulfur`, `scales_ember` | Per-species hides, streamed on spawn |
| `terrain_rock` | Terrain, boulders, ruins, volcano |
| `obsidian`, `bone`, `burnt_bark` | Spires, bone piles, dead groves |
| `lava` | Pools |
| `weapon_metal`, `weapon_wood`, `leather_glove` | Ashpiercer, camp props |

Emissive is derived from the albedo: red-dominant sets key molten heat off
`red - green`, and the sulfur set keys its toxic glow off `green - blue` instead.

## Pipeline

1. Concept stills (this guide)
2. Albedo stills in `art/textures/source/`
3. `python3 pipeline/generate_pbr.py` bakes M/R/N/AO/H/E
4. `python3 pipeline/export_models.py` writes OBJ + animation JSON to `art/`
5. `pipeline/blender_scene.py` for Blender/MCP reconstruction when bpy exists
6. Runtime assembly in `src/game` (WebGL / Three.js)
7. `npm test` validates the shipped texture set and the species table's shape
