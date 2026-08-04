import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@roadcore/ui",
    "@roadcore/design-system",
    "@roadcore/shared",
    "@roadcore/contracts",
    "@roadcore/auth",
  ],
};

export default nextConfig;
