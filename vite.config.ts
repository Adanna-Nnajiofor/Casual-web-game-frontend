import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      // Proxy all routes except those ending in common static file extensions
      "^/(?!.*\\.(?:js|css|png|jpg|jpeg|svg|ico|html))": {
        target: "https://casual-web-game-platform.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
