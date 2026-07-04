/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cuacun2anni',
  images: {
    unoptimized: true,
  },
  // Trailing slash helps with GitHub Pages routing
  trailingSlash: true,
}

module.exports = nextConfig
