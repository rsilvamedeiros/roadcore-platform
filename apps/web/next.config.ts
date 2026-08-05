import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/default/:path*",
      destination: "/fogueiracaminhoes/:path*",
      permanent: false,
    }];
  },
  transpilePackages: [
    "@roadcore/ui",
    "@roadcore/design-system",
    "@roadcore/shared",
    "@roadcore/contracts",
    "@roadcore/auth",
  ],
};

export default nextConfig;
