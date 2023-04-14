/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'flagcdn.com',
      'repository-images.githubusercontent.com',
      'raw.githubusercontent.com',
      'img.itch.zone',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
