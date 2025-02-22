import { useTranslation } from "react-i18next";

export const Book = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Gatza - Book</h1>
            <div>{t('gatza')}</div>
        </div>
    )
}