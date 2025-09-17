import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Import the path module

// import tsconfigPaths from "vite-tsconfig-paths";
// import { reactRouter } from "@react-router/dev/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig(() =>
  // { command }
  {
    const config = {
      plugins: [
        react(), // reactRouter(), tsconfigPaths()
        tailwindcss(),
        flowbiteReact(),
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"), // '@' now represents the 'src' directory
          // Add more aliases as needed, e.g., '@components': path.resolve(__dirname, './src/components')
        },
      },
      // It will be a our domain
      base: "/pir_bate_mesal/",
    };

    //  if (command !== "serve") {
    //    config.base = "/my-vite-react-app/";
    //  }
    return config;
  }
);
