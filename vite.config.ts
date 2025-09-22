import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react(), tailwindcss(), flowbiteReact()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // '@' now represents the 'src' directory
        // Add more aliases as needed, e.g., '@components': path.resolve(__dirname, './src/components')
      },
    },
    base: "/pir_bate_mesal",
  };

  return config;
});
