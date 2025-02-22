import { useTranslation } from "react-i18next";

export const Home = () => {
  const [t] = useTranslation();

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <div>{t('home')}</div>
        </div>
    )
}