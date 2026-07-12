import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/#gallery",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
