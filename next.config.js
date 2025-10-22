/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // disables built-in image optimization
    loader: 'default',
    path: '/',         // serves images as https://ecohomes.sa/images/...
  },
  basePath: '',       // keep empty
  assetPrefix: '',    // keep empty
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en/',
      },
    ];
  }

};

module.exports = nextConfig;
