/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["mathjax-render", "mathjax-render-react"],
};

module.exports = nextConfig;
