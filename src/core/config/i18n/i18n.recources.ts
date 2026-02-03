/**
 * i18n Resources and Type Definitions
 *
 * Centralized configuration for the application. This file exports constants
 * for supported languages, translation namespaces and TypeScript types.
 *
 * The structure is designed for easy maintenance and scalability, allowing
 * new languages and namespaces to be added with minimal code changes.
 *
 * @module i18n/resources
 * @see {@link 18n.config.ts} for i18next initialization
 */

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en'

export const NAMESPACES = ['common', 'home', 'about', 'studies'] as const
export type Namespace = typeof NAMESPACES[number]
export const DEFAULT_NAMESPACE: Namespace = 'common'

/**
 * Language information
 */
export interface LanguageInfo {
    code: SupportedLanguage
    name: string
}

/**
 * Language display information for UI components
 */
export const LANGUAGE_INFO: Record<SupportedLanguage, LanguageInfo> = {
    en: {
        code: 'en',
        name: 'English'
    },
    es: {
        code: 'es',
        name: 'Español'
    },
} as const