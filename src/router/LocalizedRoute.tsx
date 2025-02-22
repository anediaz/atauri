import { APP_LANGUAGES } from 'app.constants';
import { AppLayout } from 'AppLayout';
import { appStrings } from 'data';
import {IntlProvider} from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

export const LocalizedRoute = ({ children }: { children: React.ReactNode }) => {
    const { lang } = useParams();
    const navigate = useNavigate();
    if (!lang || !APP_LANGUAGES.includes(lang || '')) { 
        navigate('/eu');
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