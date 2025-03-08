import { APP_LANGUAGES, DEFAULT_LANGUAGE } from "app.constants";
import { useLocation } from "react-router-dom";

export const useLocaleFromPathname = () => {
    const { pathname } = useLocation();
    return APP_LANGUAGES.find((lang) => pathname.startsWith(`/${lang}`)) || DEFAULT_LANGUAGE;
}