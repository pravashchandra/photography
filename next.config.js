/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // reactStrictMode: true,
  images: {
      unoptimized: true,
      minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
