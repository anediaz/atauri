
import { useTranslation } from 'react-i18next';

export const MakingOf = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Gatza - Making of</h1>
            <div>{t('page.gatza')}</div>
        </div>
    )
}