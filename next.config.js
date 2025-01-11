/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  i18n: {
    locales: ["en", "tr"], // Diller
    defaultLocale: "en", // Varsayılan dil
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "public/scss")],
  },
  webpack: (config) => {
    config.infrastructureLogging = { debug: true }; // Daha detaylı loglar
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      os: false,
      stream: false,
    };
    return config;
  },
};

module.exports = nextConfig;
