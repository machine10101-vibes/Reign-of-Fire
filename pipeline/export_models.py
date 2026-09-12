#!/usr/bin/env python3
"""Export static high-poly OBJ meshes for the weapon, dragon bind-pose, and terrain."""

from __future__ import annotations

import json
import math
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "art" / "models"
ANIM = ROOT / "art" / "animations"


def write_obj(path: Path, vertices: np.ndarray, faces: np.ndarray, uvs: np.ndarray, normals: np.ndarray, name: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        f.write(f"# Reign of Fire — {name}\n")
        f.write(f"o {name}\n")
        for v in vertices:
            f.write(f"v {v[0]:.6f} {v[1]:.6f} {v[2]:.6f}\n")
        for uv in uvs:
            f.write(f"vt {uv[0]:.6f} {uv[1]:.6f}\n")
        for n in normals:
            f.write(f"vn {n[0]:.6f} {n[1]:.6f} {n[2]:.6f}\n")
        for a, b, c in faces + 1:
            f.write(f"f {a}/{a}/{a} {b}/{b}/{b} {c}/{c}/{c}\n")


def box(center, size, uv_scale=1.0):
    cx, cy, cz = center
    sx, sy, sz = size[0] / 2, size[1] / 2, size[2] / 2
    corners = np.array(
        [
            [cx - sx, cy - sy, cz - sz],
            [cx + sx, cy - sy, cz - sz],
            [cx + sx, cy + sy, cz - sz],
            [cx - sx, cy + sy, cz - sz],
            [cx - sx, cy - sy, cz + sz],
            [cx + sx, cy - sy, cz + sz],
            [cx + sx, cy + sy, cz + sz],
            [cx - sx, cy + sy, cz + sz],
        ],
        dtype=np.float64,
    )
    faces_idx = [
        (0, 1, 2, 3),
        (4, 7, 6, 5),
        (0, 4, 5, 1),
        (2, 6, 7, 3),
        (0, 3, 7, 4),
        (1, 5, 6, 2),
    ]
    verts, uvs, norms, faces = [], [], [], []
    for quad in faces_idx:
        p = corners[list(quad)]
        n = np.cross(p[1] - p[0], p[2] - p[0])
        n = n / (np.linalg.norm(n) + 1e-9)
        i0 = len(verts)
        for i, pt in enumerate(p):
            verts.append(pt)
            uvs.append(((i % 2) * uv_scale, (i // 2) * uv_scale))
            norms.append(n)
        faces.append((i0, i0 + 1, i0 + 2))
        faces.append((i0, i0 + 2, i0 + 3))
    return np.array(verts), np.array(faces), np.array(uvs), np.array(norms)


def cylinder(start, end, radius, segments=16, taper=1.0):
    axis = np.array(end, dtype=np.float64) - np.array(start, dtype=np.float64)
    length = np.linalg.norm(axis)
    dirn = axis / (length + 1e-9)
    helper = np.array([0, 1, 0]) if abs(dirn[1]) < 0.9 else np.array([1, 0, 0])
    x = np.cross(dirn, helper)
    x /= np.linalg.norm(x)
    y = np.cross(dirn, x)
    verts, uvs, norms, faces = [], [], [], []
    rings = 8
    for j in range(rings):
        t = j / (rings - 1)
        p = np.array(start) + axis * t
        r = radius * (1.0 + (taper - 1.0) * t)
        for i in range(segments):
            a = (i / segments) * math.tau
            offset = x * math.cos(a) * r + y * math.sin(a) * r
            verts.append(p + offset)
            uvs.append((i / segments, t))
            n = offset / (np.linalg.norm(offset) + 1e-9)
            norms.append(n)
    for j in range(rings - 1):
        for i in range(segments):
            a = j * segments + i
            b = j * segments + (i + 1) % segments
            c = (j + 1) * segments + i
            d = (j + 1) * segments + (i + 1) % segments
            faces.append((a, b, d))
            faces.append((a, d, c))
    return np.array(verts), np.array(faces), np.array(uvs), np.array(norms)


def concat(meshes):
    vs, fs, uvs, ns = [], [], [], []
    offset = 0
    for v, f, uv, n in meshes:
        vs.append(v)
        fs.append(f + offset)
        uvs.append(uv)
        ns.append(n)
        offset += len(v)
    return np.vstack(vs), np.vstack(fs), np.vstack(uvs), np.vstack(ns)


def export_weapon():
    parts = [
        box((0.0, 0.0, 0.15), (0.12, 0.16, 0.9), 2),  # receiver
        box((0.0, -0.02, 0.62), (0.08, 0.12, 0.28), 1),  # leather wrap
        box((0.0, 0.05, -0.42), (0.07, 0.18, 0.4), 1),  # stock
        box((0.0, 0.16, 0.05), (0.04, 0.12, 0.06), 1),  # rear sight
        box((0.0, 0.14, 0.48), (0.03, 0.1, 0.04), 1),  # front sight
        cylinder((-0.42, 0.02, 0.22), (0.42, 0.02, 0.22), 0.035, 20, 0.7),  # prod
        cylinder((0.0, 0.0, -0.1), (0.0, 0.0, 0.55), 0.028, 14, 1.0),  # barrel
        cylinder((0.0, -0.01, 0.52), (0.0, -0.01, 0.88), 0.018, 10, 0.4),  # bolt shaft
        box((0.0, -0.01, 0.92), (0.04, 0.04, 0.12), 1),  # bolt head
    ]
    v, f, uv, n = concat(parts)
    write_obj(OUT / "weapon_ballista.obj", v, f, uv, n, "weapon_ballista")
    return {"name": "weapon_ballista", "verts": int(len(v)), "faces": int(len(f))}


def fbm(x, z, octaves=5):
    h = 0.0
    amp = 1.0
    freq = 0.015
    for _ in range(octaves):
        h += amp * math.sin(x * freq) * math.cos(z * freq * 1.17)
        h += 0.5 * amp * math.sin((x + z) * freq * 0.61)
        freq *= 2.03
        amp *= 0.52
    return h


def export_terrain(res=96, size=220.0):
    verts = []
    uvs = []
    for z in range(res):
        for x in range(res):
            u = x / (res - 1)
            v = z / (res - 1)
            px = (u - 0.5) * size
            pz = (v - 0.5) * size
            h = fbm(px, pz) * 16.0
            ridge = abs(math.sin(px * 0.03) * math.cos(pz * 0.027)) * 10.0
            height = h + ridge
            verts.append((px, height, pz))
            uvs.append((u * 8.0, v * 8.0))
    verts = np.array(verts)
    faces = []
    for z in range(res - 1):
        for x in range(res - 1):
            a = z * res + x
            b = a + 1
            c = a + res
            d = c + 1
            faces.append((a, c, b))
            faces.append((b, c, d))
    faces = np.array(faces)
    # Smooth-ish normals
    normals = np.zeros_like(verts)
    for a, b, c in faces:
        n = np.cross(verts[b] - verts[a], verts[c] - verts[a])
        normals[a] += n
        normals[b] += n
        normals[c] += n
    lengths = np.linalg.norm(normals, axis=1, keepdims=True) + 1e-9
    normals /= lengths
    write_obj(OUT / "terrain_ridge.obj", verts, faces, np.array(uvs), normals, "terrain_ridge")
    return {"name": "terrain_ridge", "verts": int(len(verts)), "faces": int(len(faces))}


def export_dragon():
    parts = [
        cylinder((0, 1.4, -1.2), (0, 1.6, 2.4), 0.85, 18, 0.55),  # body
        cylinder((0, 1.6, 2.4), (0.15, 1.9, 4.6), 0.48, 14, 0.6),  # neck
        box((0.2, 2.0, 5.2), (0.7, 0.55, 1.1), 2),  # head
        cylinder((0, 1.35, -1.2), (0, 0.9, -5.8), 0.42, 14, 0.15),  # tail
        cylinder((-0.2, 1.7, 0.6), (-4.8, 3.6, 0.2), 0.18, 12, 0.4),  # L wing arm
        cylinder((0.2, 1.7, 0.6), (4.8, 3.6, 0.2), 0.18, 12, 0.4),  # R wing arm
        cylinder((-0.4, 1.2, 1.6), (-0.55, 0.1, 2.0), 0.16, 8, 0.7),
        cylinder((0.4, 1.2, 1.6), (0.55, 0.1, 2.0), 0.16, 8, 0.7),
        cylinder((-0.4, 1.15, -0.4), (-0.5, 0.1, -0.7), 0.16, 8, 0.7),
        cylinder((0.4, 1.15, -0.4), (0.5, 0.1, -0.7), 0.16, 8, 0.7),
    ]
    v, f, uv, n = concat(parts)
    write_obj(OUT / "dragon_ashwrought_bindpose.obj", v, f, uv, n, "dragon_ashwrought")
    return {"name": "dragon_ashwrought", "verts": int(len(v)), "faces": int(len(f))}


def export_animations():
    ANIM.mkdir(parents=True, exist_ok=True)
    clips = {
        "name": "ashwrought",
        "fps": 30,
        "skeleton": [
            "root", "chest", "neck_a", "neck_b", "head", "jaw",
            "tail_a", "tail_b", "tail_c",
            "wing_l_upper", "wing_l_lower", "wing_r_upper", "wing_r_lower",
        ],
        "clips": {
            "fly": {"duration": 1.6, "loop": True, "channels": {"wing_l_upper.z": "sin", "wing_r_upper.z": "-sin"}},
            "dive": {"duration": 0.8, "loop": False, "rootPitch": -0.55},
            "breathe": {"duration": 1.4, "loop": False, "jawOpen": 0.7},
            "pain": {"duration": 0.5, "loop": False, "recoil": 0.35},
            "death": {"duration": 2.4, "loop": False, "rootPitch": 1.1},
        },
    }
    (ANIM / "dragon_ashwrought.json").write_text(json.dumps(clips, indent=2), encoding="utf-8")
    return clips


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {
        "weapon": export_weapon(),
        "terrain": export_terrain(),
        "dragon": export_dragon(),
        "animations": export_animations()["clips"],
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
