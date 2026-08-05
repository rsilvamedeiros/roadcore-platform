import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

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

export default withPayload(nextConfig);
