import { defineConfig } from "vite";

const pages = process.env.GITHUB_PAGES === "1";

export default defineConfig({
  base: pages ? "/Reign-of-Fire/" : "/",
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
});
