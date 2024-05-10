/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com'],
  },
  // output: 'export',
  trailingSlash: true,
  staticPageGenerationTimeout: 1000,
  images: {
    unoptimized: true,
    domains: ["d3e4m6b6rxmux9.cloudfront.net", "i.imgur.com"],
  },
};

export default nextConfig;
