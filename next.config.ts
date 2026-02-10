import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  // distDir: 'dist',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/pir_bate_mesal/" : "",
  basePath: isProd ? "/pir_bate_mesal/" : "",
};

export default nextConfig;
