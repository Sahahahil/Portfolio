import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ Required to resolve the alias

export default defineConfig({
  base: "/Portfolio/", // or your repo name if deploying to GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
