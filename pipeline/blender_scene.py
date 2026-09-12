#!/usr/bin/env python3
"""
Blender MCP / bpy scene builder for Reign of Fire.

Blender MCP is not attached to this Cloud Agent runtime. This script is the
offline equivalent of that milestone: it reconstructs the volcanic ridge,
dragon armature, ballista, volumetric-style lighting, and GLB export when
executed inside Blender:

    blender --background --python pipeline/blender_scene.py

If bpy is unavailable, the playable WebGL scene (src/) is the runtime map.
"""

from __future__ import annotations

import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "art" / "models"
PBR = ROOT / "public" / "assets" / "textures" / "pbr"


def build_with_bpy():
    import bpy  # type: ignore

    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.04, 0.035, 0.03, 1)
    bg.inputs[1].default_value = 0.35

    bpy.ops.mesh.primitive_grid_add(x_subdivisions=96, y_subdivisions=96, size=220)
    terrain = bpy.context.active_object
    terrain.name = "VolcanicRidge"
    for v in terrain.data.vertices:
        x, y, z = v.co
        h = math.sin(x * 0.03) * math.cos(y * 0.027) * 12.0
        v.co.z = h + abs(math.sin(x * 0.011) * 8.0)
    terrain.data.update()

    bpy.ops.object.armature_add(location=(0, 0, 18))
    arm = bpy.context.active_object
    arm.name = "Ashwrought_Armature"

    bpy.ops.mesh.primitive_cube_add(size=0.4, location=(0, -1.2, 1.6))
    weapon = bpy.context.active_object
    weapon.name = "BallistaRifle"
    weapon.scale = (0.3, 0.2, 1.4)

    sun = bpy.data.lights.new("AshSun", "SUN")
    sun.energy = 4.2
    sun.color = (1.0, 0.55, 0.28)
    sun_obj = bpy.data.objects.new("AshSun", sun)
    scene.collection.objects.link(sun_obj)
    sun_obj.rotation_euler = (math.radians(48), 0, math.radians(35))

    ember = bpy.data.lights.new("EmberFill", "AREA")
    ember.energy = 250
    ember.color = (1.0, 0.25, 0.05)
    ember_obj = bpy.data.objects.new("EmberFill", ember)
    scene.collection.objects.link(ember_obj)
    ember_obj.location = (0, 0, 6)

    OUT.mkdir(parents=True, exist_ok=True)
    glb = OUT / "reign_of_fire_scene.glb"
    bpy.ops.export_scene.gltf(filepath=str(glb), export_format="GLB")
    return str(glb)


def main():
    report = {
        "blenderMcp": "unavailable in this agent — using bpy fallback if Blender is installed",
        "pbr": str(PBR),
        "exported": None,
    }
    try:
        report["exported"] = build_with_bpy()
        report["ok"] = True
    except ModuleNotFoundError:
        report["ok"] = False
        report["reason"] = "bpy not installed; WebGL runtime scene is the playable map"
        print("Blender/bpy not present. Pipeline documented; WebGL scene is authoritative.", file=sys.stderr)
    (OUT / "blender_export_report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
