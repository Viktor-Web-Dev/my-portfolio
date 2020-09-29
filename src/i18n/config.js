import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  fallbackLng: ['en', 'ru'],
  resources: {
    ru: {
      translations: require('../locales/rus/translations.json'),
    },
    en: {
      translations: require('../locales/en/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ['rus', 'en']

export default i18next
