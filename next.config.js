/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, depois do next 14 não é mais necessario
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
