# Reign of Fire

First-person dragon hunt on Caldera Ridge. WebGL vertical slice targeting Unreal-style grit: volcanic terrain, a fully animated Ashwrought, and the Ashpiercer ballista.

## Play

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

## Milestones in this slice

1. **Visual target & pipeline** — `art/`, `docs/STYLE_GUIDE.md`, PBR bake, OBJ/animation export, Blender bpy script
2. **Mechanics** — FPS controller, camera shake, footfall weight, motion blur, dragon AI, ballistics, hitboxes, fire/blood particles
3. **World** — volcanic ridge, volumetric-style ash, ember lighting, adaptive 60 FPS quality ladder

Blender MCP is not attached to this runtime. `pipeline/blender_scene.py` is the offline reconstruction entry when Blender is installed.

## Layout

```
art/                 visual target + creature/weapon concepts
docs/STYLE_GUIDE.md  art bible
pipeline/            PBR baker, OBJ export, Blender scene
public/assets/       runtime textures, models, animations
src/game/            playable Three.js slice
```
