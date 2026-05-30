import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/eclat-nails',
  assetPrefix: '/eclat-nails',
  images: { unoptimized: true },
};

export default nextConfig;
