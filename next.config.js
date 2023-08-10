/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  async rewrites() {
    return [
      // Handle redirection and API call for pages with slugs
      {
        source: '/:slug', // Match any path with a slug
        destination: '/api/[slug]', // Redirect to the custom API route
      },
    ];
  },
};
