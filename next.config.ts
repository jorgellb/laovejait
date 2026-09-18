import type { NextConfig } from "next";
import { permanentRedirects } from "./src/config/legacy-routes";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return permanentRedirects.map((item) => ({
      source: item.source,
      destination: item.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
