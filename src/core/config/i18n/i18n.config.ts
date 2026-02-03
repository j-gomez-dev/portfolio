/**
 * i18next Configuration
 *
 * Initializes i18next with HTTP backend for async translation loading,
 * automatic language detection based on browser preferences, and React integration.
 *
 * @module i18n/config
 * @see {@link i18n.resources.ts} for language and namespace definitions
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { 
    DEFAULT_LANGUAGE, 
    DEFAULT_NAMESPACE, 
    SUPPORTED_LANGUAGES 
} from './i18n.recources'

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: SUPPORTED_LANGUAGES,
        defaultNS: DEFAULT_NAMESPACE,

        // Translation files location pattern
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        interpolation: {
            escapeValue: false,
        },
    })
