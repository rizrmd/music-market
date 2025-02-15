import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/music-market",
  assetPrefix: "/music-market/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
