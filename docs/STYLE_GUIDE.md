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
| Dragon | Obsidian plates, molten capillary cracks, bat-wing membrane, horned skull |
| Weapon | Hybrid siege ballista × anti-materiel rifle. Steel cable, scorched oak, leather wrap, barbed bolt |

## Creature — Ashwrought

Concept: `art/concepts/dragon_model_sheet.png`

- Silhouette: quadruped wyrm, wingspan ~3.2× body length
- Surface: black keratin scales + emissive magma veins (PBR `dragon_scales_*`)
- Membrane: `dragon_wing_*` with subsurface-red veins
- Skeleton: root → chest → neck×2 → head/jaw; wing upper/lower; tail×3
- Weak points: head 3.0×, body 1.0×, wings 0.55×, tail 0.7×

## Weapon — Ashpiercer Ballista

Concept: `art/concepts/weapon_ballista_concept.png`

- First-person only. Left hand on prod, right on grip.
- Ballistics: heavy bolt, 92 m/s, gravity 9.2, mild drop past 40 m
- Impact: scale chips + dark arterial spray + ember sparks

## Environment — Caldera Ridge

- Craggy displacement terrain, lava in negative space
- Ash particles (large, slow) + embers (small, rising)
- Fog density high, warm in-scatter, cold out-scatter
- Lighting: low sun through ash (warm key) + lava bounce (orange fill) + overcast sky

## Pipeline

1. Concept stills (this guide)
2. Albedo stills in `public/assets/textures/source/`
3. `python3 pipeline/generate_pbr.py` bakes M/R/N/AO/H/E
4. `python3 pipeline/export_models.py` writes OBJ + animation JSON
5. `pipeline/blender_scene.py` for Blender/MCP reconstruction when bpy exists
6. Runtime assembly in `src/game` (WebGL / Three.js)
