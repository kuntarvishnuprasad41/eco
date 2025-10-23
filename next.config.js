/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/', // ensures public/ assets load correctly
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Optional: allow LAN development
  allowedDevOrigins: ['192.168.100.12'],
};

module.exports = nextConfig;
