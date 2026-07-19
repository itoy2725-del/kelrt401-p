/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.migrosone.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['mysql2'],
  },
  typescript: {
    // TypeScript hataları olsa bile derlemeye (build) devam et
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint hataları olsa bile derlemeye (build) devam et
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
