import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Open images in a browser tab instead of downloading them.
    // Safe here because the site only serves images from your own /public folder.
    contentDispositionType: "inline",
  },
};

export default nextConfig;