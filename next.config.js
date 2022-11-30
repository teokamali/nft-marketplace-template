const { CompletionInfoFlags } = require("typescript");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CORE_URL: process.env.CORE_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
