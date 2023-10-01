/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.exercisedb.io",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  env: {
    API_KEY: "1aaa7045cfmsh502f3009397a9cbp179a49jsnaeface2db3c8",
  },
  experimental: {
    serverActions: true,
  },
};
