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
- **Order:** bloom and the motion-trail afterimage run on the linear HDR buffer;
  the grade, vignette, dispersion and grain run *after* tone mapping. Grading
  linear values with display-referred thresholds is what turns this palette into
  grainy brown mud — mid grey is 0.2 in linear space, so highlight gain never
  engages and shadow grain becomes an enormous relative perturbation.
- **Emissive discipline:** nothing may out-radiate its own albedo. Terrain lava
  and creature grout are both gated on their crack masks, and heat pools in
  bands rather than covering a whole surface. A flat emissive term over rock or
  hide erases every bit of texture detail underneath it.
- **Depth:** three overlapping fogged skylines sit at 300–470m. At that range
  exponential fog takes all but a tenth of their shading, which is the point —
  they are silhouettes layered against the burning sky, not modelled mountains.
  For the same reason they are noise-driven curtains and not geometry: a cone
  silhouettes as a triangle however much its flanks are displaced, and a ring
  of them reads as tents pitched around the map.
- **Translucency:** wing membranes are lit through as well as on. A wing spread
  against a burning sky with a low raking key light is backlit most of the time,
  and without transmission the largest panel on the beast goes to a flat dark
  board. Strongest face-on, where the path through the membrane is shortest, and
  multiplied by the hide colour so the vanes and finger bones stay silhouetted.

## Creature language

Concept: `art/concepts/dragon_model_sheet.png`

Every species is generated from one entry in `src/game/species.js`. The shared
rig is: chest lathe with belly scutes and a dorsal keel → neck×2-3 → lathed
skull and mandible with teeth, sockets and swept horns; dorsal spikes on the
species that carry them; tail×4-7 with a flattened barb; two articulated wings
(shoulder, elbow, wrist, inner and outer sails, three finger bones, tip hook);
four legs that fold at the knee.

The membrane is lofted as a cambered grid between its leading and trailing
splines, bowed under between the arm and the trailing edge, with the bays
falling between the finger bones and veins painted in the sail. A triangulated
outline has no interior vertices to displace and stays planar however its
silhouette is shaped.

The flap is not a rigid board. The downstroke extends the elbow and travels;
the upstroke folds it so the return does not fight the air. A glide holds the
sail out. A bank folds the inner wing. The neck and skull pitch and yaw at the
hunter, which is also how a dive from overhead stops breathing at the horizon.

Species read apart at silhouette distance first, colour second:

| Species | Silhouette cue | Surface |
| --- | --- | --- |
| Emberkin | Smallest, long thin neck, no spikes | Metallic ember flecks, dull glow |
| Cinderwyrm | Widest wingspan for its body, four short horns | Forge-hot, highest emissive |
| Ashwrought | Baseline proportions, heavy spikes | Obsidian plates, molten capillary cracks |
| Sulfurmaw | Longest neck, oversized head, no spikes | Yellow-green crust, toxic emissive |
| Pale Stalker | Longest tail, four tall horns | Ash-bleached cracked hide, cold blue eyes, almost no glow |
| Basalt Tyrant | Squat and huge, six horns, short wings | Cooled columnar rock, matte, barely glows |
| Rustwing | Small, widest wingspan for its body, three low horns | Slate keeled scales with rust staining in the seams; the only cold-blooded set, 6% of the hide lit against the Cinderwyrm's 29% |

Scale tiling is derived from body size, not left in UV space. Uniformly scaling
the root is what gave the Basalt Tyrant plates four times the size of an
Emberkin's and reduced its hide to a featureless tube.

Weak points are shared: head 3.0×, neck 1.6×, body 1.0×, tail 0.7×, wings 0.55×.
Bolts resolve against the highest multiplier first, so the skull is always
reachable even though the torso sphere overlaps it. Armour soaks a flat fraction
everywhere except the skull, which soaks a quarter as much — the Basalt Tyrant's
55% armour is the reason its only real weak point is the head.

## Stakes

- The hunter can be killed. Down at zero health, the view drops, the beast that
  did it is named, and he wakes at the camp fire with the flight restarted.
  Bounty and kills stand; the flight is the loss. Aggression weights only mean
  something if there is a fail state for them to threaten
- The autoplay attract loop mends its own damage and never sees that screen. A
  showreel that ends on a death overlay is worse than one that cheats

## Weapon — Ashpiercer Ballista

Concept: `art/concepts/weapon_ballista_concept.png`

- First-person only. Left hand on prod, right on grip.
- Ballistics: heavy bolt, 92 m/s, gravity 9.2, mild drop past 40 m
- Impact: scale chips + dark arterial spray + ember sparks

## Environment — Caldera Ridge

- Craggy displacement terrain, lava in the negative space, ash bleaching the
  peaks via vertex colour. Relief at four scales: eighty-metre swells, a ridged
  multifractal massif, twenty-metre benches, and the six- and two-metre bands,
  at just over a metre per quad so all of them resolve. Ground reads as dunes if
  any scale is left empty *or* if the massif is plain fbm, which is rolling by
  construction; neither is fixable with a normal map
- The camp is levelled onto a shelf — macro bands only, so the six- and
  two-metre relief survives and the shelf is flat without being a car park
- Terrain samples its own albedo and roughness a second time at 8× frequency so
  the ground holds detail underfoot without a larger texture
- Props, all instanced and scattered through a slope-and-elevation aware
  sampler: basalt boulders, knee-to-waist stone, scree, obsidian outcrops, burnt
  dead groves, dragon bone piles, toppled columnar ruins, animated lava pools.
  Outcrops are sheared columns with flat broken tops, not needles — a scatter of
  five-sided cones reads as shark teeth. Bone piles are dented and ash-caked; a
  clean ellipsoid cranium catches the sky and reads as a pale egg on the slope
- Stone is cut rather than dented: the radius along a direction is the distance
  to the nearest of eleven cutting planes, which is what gives it flat faces and
  hard edges. Three throws of the planes for the boulders, because eighty
  instances of one block is a pattern the eye picks up across open ground
- Everything that reaches the eye is a collision blocker and the player pushes
  out of it. Scree and knee-high stone deliberately are not: shuffling sideways
  around gravel is worse than stepping over it
- Landmarks: an erupting volcano on the horizon with a drifting plume, and the
  hunter's camp at the spawn point (staked trophy skulls, hide tarp, bonfire)
- Ash particles (large, slow) + embers (small, rising), both recycled around the
  camera so the field never thins out; fire and venom use soft radial splats
- Fog density high, warm in-scatter, cold out-scatter

## Material sets

Sixteen baked sets. Source albedos live in `art/textures/source/`; the baker
writes the six maps the renderer samples as WebP q90 into
`public/assets/textures/pbr/`, and height maps to `art/textures/height/` for
offline/Blender use only.

| Set | Used by |
| --- | --- |
| `dragon_scales`, `dragon_wing` | Ashwrought body, all wing membranes |
| `scales_cinder`, `scales_basalt`, `scales_pale`, `scales_sulfur`, `scales_ember`, `scales_kin` | Per-species hides, streamed on spawn |
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
