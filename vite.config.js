import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // Relative base so the build works on GitHub Pages, gh-pages, and CDNs.
  base: command === "build" ? "./" : "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
  build: {
    target: "es2022",
    sourcemap: true,
  },
}));
