import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // <-- important: tells Vercel where the final files go
  },
  server: {
    port: 5173,
    open: true,
  },
});
