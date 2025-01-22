import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
  experimental: {
    // Add any other experimental features here if needed
    appDir: true,
  },
  // Add other Next.js configurations here if needed
};

export default nextConfig;
