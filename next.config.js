/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // disables built-in image optimization
    loader: 'default',
    path: '/',         // serves images as /images/...
  }, basePath: '', // keep it empty
  assetPrefix: '', // keep it empty
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/',
        permanent: false, // 307 redirect
      },
    ];
  },
};

module.exports = nextConfig;
