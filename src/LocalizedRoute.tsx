import { AppLanguages } from 'app.constants';
import { appStrings } from 'data';
import {IntlProvider} from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

export const LocalizedRoute = ({ children }: { children: React.ReactNode }) => {
    const { lang } = useParams();
    const navigate = useNavigate();
    if (!lang || !AppLanguages.includes(lang || '')) { 
        navigate('/eu');
        return null;
    }
    return (
        <IntlProvider locale={lang} messages={appStrings[lang]}>
            {children}
        </IntlProvider>

    )
}