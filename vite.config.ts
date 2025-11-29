import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  server: {
    headers: {
      "Content-Security-Policy":
        "worker-src 'self' blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
    },
  },
});
