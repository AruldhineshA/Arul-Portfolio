import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // SSR config: tells Vite which dependencies to bundle during server build
  ssr: {
    // These packages need to be bundled (not left as external imports)
    // because they use JSX or browser-specific code
    noExternal: [
      "react-icons",
      "react-scroll",
      "react-type-animation",
      "framer-motion",
    ],
  },
});
