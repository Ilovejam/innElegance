// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'fr', 'ar'],
  },
  localePath: path.resolve('./public/locales'), // Adjust path as necessary
};
