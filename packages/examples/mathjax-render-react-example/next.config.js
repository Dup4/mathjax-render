/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["mathjax-render", "mathjax-render-nextjs"],
};

module.exports = nextConfig;
