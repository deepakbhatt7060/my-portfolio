import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  basePath: '/my-portfolio',
  assetPrefix:'/my-portfolio',
  reactStrictMode: true,
};

export default nextConfig;
