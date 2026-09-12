#!/usr/bin/env python3
"""Reign of Fire — albedo → PBR map baker (normal, roughness, height, metallic, AO, emissive)."""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "assets" / "textures" / "source"
OUT = ROOT / "public" / "assets" / "textures" / "pbr"
MAX_SIZE = 1024

PRESETS = {
    "dragon_scales_albedo.png": {
        "stem": "dragon_scales",
        "normal_strength": 6.5,
        "roughness_bias": 0.42,
        "metallic": 0.18,
        "emissive_from_red": True,
        "ao_strength": 0.55,
    },
    "dragon_wing_albedo.png": {
        "stem": "dragon_wing",
        "normal_strength": 4.0,
        "roughness_bias": 0.55,
        "metallic": 0.05,
        "emissive_from_red": True,
        "ao_strength": 0.4,
    },
    "terrain_rock_albedo.png": {
        "stem": "terrain_rock",
        "normal_strength": 8.0,
        "roughness_bias": 0.72,
        "metallic": 0.02,
        "emissive_from_red": True,
        "ao_strength": 0.7,
    },
    "weapon_metal_albedo.png": {
        "stem": "weapon_metal",
        "normal_strength": 3.5,
        "roughness_bias": 0.38,
        "metallic": 0.86,
        "emissive_from_red": False,
        "ao_strength": 0.5,
    },
    "weapon_wood_albedo.png": {
        "stem": "weapon_wood",
        "normal_strength": 4.2,
        "roughness_bias": 0.78,
        "metallic": 0.0,
        "emissive_from_red": False,
        "ao_strength": 0.45,
    },
    "leather_glove_albedo.png": {
        "stem": "leather_glove",
        "normal_strength": 3.8,
        "roughness_bias": 0.68,
        "metallic": 0.0,
        "emissive_from_red": False,
        "ao_strength": 0.4,
    },
    "lava_emissive.png": {
        "stem": "lava",
        "normal_strength": 2.0,
        "roughness_bias": 0.35,
        "metallic": 0.0,
        "emissive_from_red": True,
        "ao_strength": 0.2,
    },
}


def load_rgb(path: Path) -> np.ndarray:
    img = Image.open(path).convert("RGB")
    if max(img.size) > MAX_SIZE:
        img = img.resize((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)
    return np.asarray(img, dtype=np.float32) / 255.0


def to_luma(rgb: np.ndarray) -> np.ndarray:
    return rgb[..., 0] * 0.2126 + rgb[..., 1] * 0.7152 + rgb[..., 2] * 0.0722


def save_rgb(path: Path, arr: np.ndarray) -> None:
    Image.fromarray(np.clip(arr * 255.0, 0, 255).astype(np.uint8)).save(path, optimize=True)


def save_gray(path: Path, arr: np.ndarray) -> None:
    Image.fromarray(np.clip(arr * 255.0, 0, 255).astype(np.uint8)).save(path, optimize=True)


def height_to_normal(height: np.ndarray, strength: float) -> np.ndarray:
    dy, dx = np.gradient(height)
    nx = -dx * strength
    ny = -dy * strength
    nz = np.ones_like(height)
    length = np.sqrt(nx * nx + ny * ny + nz * nz)
    n = np.stack((nx / length, ny / length, nz / length), axis=-1)
    return n * 0.5 + 0.5


def bake(name: str, preset: dict) -> dict:
    rgb = load_rgb(SRC / name)
    luma = to_luma(rgb)
    height = 1.0 - luma
    # Emphasize cracks (darker = deeper).
    height = np.clip(height ** 1.15, 0, 1)
    normal = height_to_normal(height, preset["normal_strength"])
    roughness = np.clip(preset["roughness_bias"] + (1.0 - luma) * 0.35, 0.08, 0.97)
    metallic = np.full_like(luma, preset["metallic"])
    ao = np.clip(1.0 - height * preset["ao_strength"], 0.15, 1.0)

    red = rgb[..., 0]
    green = rgb[..., 1]
    molten = np.clip((red - green) * 2.4, 0, 1)
    if preset["emissive_from_red"]:
        emissive = np.stack((molten, molten * 0.28, molten * 0.04), axis=-1)
    else:
        emissive = np.zeros_like(rgb)

    stem = preset["stem"]
    paths = {
        "albedo": OUT / f"{stem}_albedo.png",
        "normal": OUT / f"{stem}_normal.png",
        "roughness": OUT / f"{stem}_roughness.png",
        "metallic": OUT / f"{stem}_metallic.png",
        "height": OUT / f"{stem}_height.png",
        "ao": OUT / f"{stem}_ao.png",
        "emissive": OUT / f"{stem}_emissive.png",
    }
    Image.fromarray(np.clip(rgb * 255.0, 0, 255).astype(np.uint8)).save(paths["albedo"], optimize=True)
    save_rgb(paths["normal"], normal)
    save_gray(paths["roughness"], roughness)
    save_gray(paths["metallic"], metallic)
    save_gray(paths["height"], height)
    save_gray(paths["ao"], ao)
    save_rgb(paths["emissive"], emissive)
    return {
        "source": name,
        "stem": stem,
        "resolution": [int(rgb.shape[1]), int(rgb.shape[0])],
        "maps": {k: str(v.relative_to(ROOT)) for k, v in paths.items()},
    }


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = []
    for name, preset in PRESETS.items():
        src = SRC / name
        if not src.exists():
            raise SystemExit(f"Missing source texture: {src}")
        print(f"Baking {name} ...")
        manifest.append(bake(name, preset))

    sky = SRC / "sky_ash_storm.png"
    if sky.exists():
        dest = OUT / "sky_ash_storm.png"
        sky_img = Image.open(sky).convert("RGB")
        sky_img = sky_img.resize((1536, 864), Image.Resampling.LANCZOS)
        sky_img.save(dest, optimize=True)
        manifest.append({"source": sky.name, "stem": "sky", "maps": {"env": str(dest.relative_to(ROOT))}})

    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Wrote {len(manifest)} material sets → {OUT}")


if __name__ == "__main__":
    main()
