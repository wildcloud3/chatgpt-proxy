/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  proxyTimeout: 120_000,
  async rewrites() {
    const logMiddleware = (req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.url}`)
      next()
    }
    
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://api.openai.com/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
