import { DEFAULT_LANGUAGE, isAppLanguage } from 'app.constants';
import { AppLayout } from 'AppLayout';
import { appStrings } from 'data';
import {IntlProvider} from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

export const LocalizedRoute = ({ children }: { children: React.ReactNode }) => {
    const { lang } = useParams();
    const navigate = useNavigate();
    if (!isAppLanguage(lang)) {
        navigate(DEFAULT_LANGUAGE);
        return null;
    }
    return (
        <IntlProvider locale={lang} messages={appStrings[lang]}>
            <AppLayout>
                {children}
            </AppLayout>
        </IntlProvider>

    )
}