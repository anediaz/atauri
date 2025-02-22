export const DEFAULT_LANGUAGE: AppLanguage = 'eu';
export const APP_LANGUAGES = ['eu', 'en', 'es', 'fr'];
export type AppLanguage = typeof APP_LANGUAGES[number];
export type LanguageStrings = { [key: string]: string }

export const isAppLanguage = (language?: string): language is AppLanguage => {
    if (!language) {
        return false;
    }
    return APP_LANGUAGES.includes(language as AppLanguage);
};