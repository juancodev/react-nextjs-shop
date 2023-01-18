/** @type {import("next").NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: 'wixmp.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'empresas.blogthinkbig.com',
      },
    ],
  },
  // env: {
  //   customKey: "customValue",
  // },
  // basePath: "/dist",
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/home",
  //       destination: "https://juancodev.com",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
