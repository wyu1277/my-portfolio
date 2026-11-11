import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Open images in a browser tab instead of downloading them.
    contentDispositionType: "inline",
  },
  async redirects() {
    // The editor only exists on your own computer.
    return process.env.NODE_ENV === "production"
      ? [{ source: "/keystatic/:path*", destination: "/", permanent: false }]
      : [];
  },
};

export default nextConfig;