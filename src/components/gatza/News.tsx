
import { useTranslation } from 'react-i18next';

export const News = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Gatza - News</h1>
            <div>{t('page.gatza')}</div>
        </div>
    )
}