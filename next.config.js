/** @type {import('next').NextConfig} */

// detect if we are building in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/cuacun2anni' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  // Trailing slash helps with GitHub Pages routing
  trailingSlash: true,
}

module.exports = nextConfig
