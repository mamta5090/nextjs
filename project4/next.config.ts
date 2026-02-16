import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"lh3"
      }
    ]
  }
};

export default nextConfig;
