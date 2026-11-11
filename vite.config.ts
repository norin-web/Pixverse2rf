import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: served from https://norin-web.github.io/Pixverse2rf/.
  // When a domain is attached in Pages settings, switch to base "/" AND add
  // public/CNAME with the domain in the same commit, or every asset 404s.
  base: "/Pixverse2rf/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
