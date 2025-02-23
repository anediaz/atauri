import { DEFAULT_LANGUAGE, isAppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";

export const Menu = () => {
  const [t] = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams();
  if (!isAppLanguage(lang)) { 
    return null;
  }
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS } = MENU_ITEMS;
  return (
    <div role='navigation' style={{ display: "flex", flexDirection: "column", padding: "30px 10px", border: '1px solid black' }}>
      <h3>Atauri</h3>
      {GATZA_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`}>{t(item.menuItem)}</Link>
      ))}
      {ARAOTZ_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`}>{t(item.menuItem)}</Link>
      ))}
    </div>
  );
}