/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverTimeout: 300000,
  async rewrites() {
    const logMiddleware = (req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.url}`)
      next()
    }
    
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://api.openai.com/:slug*",
        middleware: [logMiddleware],
      },
    ];
  },
};

module.exports = nextConfig;
