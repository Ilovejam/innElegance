const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr"], // Desteklenen diller
    defaultLocale: "en", // Varsayılan dil
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")], // SCSS dosyalarının doğru yolu
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

    return config; // Önbellek ayarı kaldırıldı, gereksiz ise eklemeyin
  },
};

module.exports = nextConfig;
