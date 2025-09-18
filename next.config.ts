// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "helen-portfolio"; // ← your GitHub repo name

const nextConfig: NextConfig = {
  // Export a static site to /out so it can be hosted on GitHub Pages
  output: "export",

  // GitHub Pages can't run Next's Image Optimization
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/imageLoader.ts'
  },

  // Serve under /<repo> in production (required for GitHub Pages on a project repo)
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  trailingSlash: true,
};

export default nextConfig;
