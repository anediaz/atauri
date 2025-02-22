import { useTranslation } from "react-i18next";

export const Gatza = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Gatza</h1>
            <div>{t('gatza')}</div>
        </div>
    )
}