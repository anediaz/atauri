import { useTranslation } from "react-i18next";

export const Araotz = () => {
    const [t] = useTranslation();
    return (
        <div>
            <h1>Araotz</h1>
            <div>{t( 'araotz')}</div>
        </div>
    )
}