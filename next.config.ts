import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: ".",
  basePath: process.env.NODE_ENV === "production" ? "/music-market" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
