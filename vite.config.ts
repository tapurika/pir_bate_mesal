import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Import the path module

// import tsconfigPaths from "vite-tsconfig-paths";
// import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // reactRouter(), tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' now represents the 'src' directory
      // Add more aliases as needed, e.g., '@components': path.resolve(__dirname, './src/components')
    },
  },
});
