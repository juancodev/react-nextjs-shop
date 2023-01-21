/** @type {import("next").NextConfig} */
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: false,
//   register: true,
//   mode: 'production',
// });

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'api.lorem.space',
      'placeimg.com',
      'wixmp.com',
      'img.freepik.com',
      'empresas.blogthinkbig.com',
      'www.nasa.gov',
      'thenorthfaceec.vteximg.com.br',
      'api.escuelajs.co',
      'm.media-amazon.com',
      'cdn.eso.org',
      'upload.wikimedia.org',
      'picsum.photos',
      'staticfanpage.akamaized.net',
      'sfondo.info',
      'cdn.pixabay.com',
      'cdn11.bigcommerce.com',
      'www.ventennipaperoni.com',
      'i1.wp.com',
      'www.pexels.com',
      'www.inturchia.it',
      'encrypted-tbn0.gstatic.com',
      'th-thumbnailer.cdn-si-edu.com',
      'images.pexels.com',
      'qrius.com',
      'hips.hearstapps.com',
      'images.unsplash.com',
      'lorem.picsum',
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

// module.exports = withPWA({ nextConfig });
module.exports = nextConfig;
