import { APP_LANGUAGES, AppLanguage, DEFAULT_LANGUAGE, isAppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";

interface LanguageSelectorProps {
    setLanguage: (lang: AppLanguage) => void;
    selectedLanguage: AppLanguage;
 }

const LanguageSelector = ({ setLanguage, selectedLanguage }: LanguageSelectorProps) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isActive = (language: AppLanguage) => language === selectedLanguage;

    return <div className="LanguageSelector" role="menuitem">
      <ul>
        {APP_LANGUAGES.map((language) => (
          <li
            title={language}
            key={language}
            role="menuitem"
            onKeyDown={() => { }}
            aria-label={`language-item-${language}`}
            style={{ color: isActive(language) ? 'red' : 'black', cursor: 'pointer' }}
                onClick={() => {
                  const path = pathname.substring(3);
                  setLanguage(language);
                  navigate(`/${language}${path}`);
             }}    
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
}

export const Menu = ({ setLanguage }: { setLanguage: (lang: AppLanguage) => void }) => {
  const [t] = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams();
  if (!isAppLanguage(lang)) { 
    return null;
  }
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS } = MENU_ITEMS;
  return (
    <div role='navigation' style={{ display: "flex", flexDirection: "column", padding: "30px 10px", border: '1px solid black' }}>
      <h3>Atauri</h3>
      <LanguageSelector selectedLanguage={lang} setLanguage={setLanguage} />
      {GATZA_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`}>{t(item.menuItem)}</Link>
      ))}
      {ARAOTZ_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`}>{t(item.menuItem)}</Link>
      ))}
    </div>
  );
}