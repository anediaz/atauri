import { AppLanguage, DEFAULT_LANGUAGE, isAppLanguage } from 'app.constants';
import { AppLayout } from 'AppLayout/AppLayout';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const LocalizedRoute = ({ children }: { children: React.ReactNode }) => {
    const { i18n } = useTranslation();
    const { locale = DEFAULT_LANGUAGE } = useParams<AppLanguage>();

    useEffect(() => {
        i18n.changeLanguage(isAppLanguage(locale) ? locale : DEFAULT_LANGUAGE);
    }, [i18n, locale]);

    const updateLanguage = (lang: AppLanguage) => {
        i18n.changeLanguage(lang as AppLanguage);
    }
    return (
        <AppLayout setLanguage={updateLanguage} language={locale}>
            {children}
        </AppLayout>

    )
}