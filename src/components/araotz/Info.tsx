import { useTranslation } from "react-i18next";

export const Info = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Araotz - Info</h1>
            <div>{t('araotz')}</div>
        </div>
    )
}