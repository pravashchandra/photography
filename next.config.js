/** @type {import('next').NextConfig} */
const nextConfig = {
 
  // output: "export",
  // reactStrictMode: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com']
  }
};

module.exports = nextConfig;
