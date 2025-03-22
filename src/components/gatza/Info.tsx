import { useTranslation } from "react-i18next";

export const Info = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Gatza - Info</h1>
            <div>{t('page.gatza')}</div>
        </div>
    )
}