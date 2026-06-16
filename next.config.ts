import type { NextConfig } from "next";
import { basePath } from "./lib/basePath";

const assetPrefix = basePath ? `${basePath}/` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
