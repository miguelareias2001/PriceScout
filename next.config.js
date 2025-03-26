/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable automatic PostCSS/Tailwind configuration
  webpack: (config) => {
    return config;
  }
}

module.exports = nextConfig;
