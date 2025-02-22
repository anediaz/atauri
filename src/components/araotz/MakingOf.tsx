import { useTranslation } from "react-i18next";

export const MakingOf = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Araotz - MakingOf</h1>
            <div>{t('araotz')}</div>
        </div>
    )
}