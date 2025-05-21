import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './i18n';
import resources from './localization/resources';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
