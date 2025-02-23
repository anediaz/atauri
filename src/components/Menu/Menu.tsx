import { DEFAULT_LANGUAGE, isAppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";
import './menu.css';
import { MenuItem } from "router/gatza.constants";

interface MenuProps { 
  isOpen: boolean;
}


export const Menu = ({isOpen}:MenuProps) => {
  const [t] = useTranslation();
  const { lang = DEFAULT_LANGUAGE } = useParams();
  if (!isAppLanguage(lang)) { 
    return null;
  }
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS } = MENU_ITEMS;

  const buildMenuGroup = (items:MenuItem[]) => {
    return items.map((item, index) => {
      if (index === 0) {
        return (
          <div className="menu-item-main" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: '5px' }}>
            <div className="menu-item">+</div>
            <Link key={item.menuItem} to={`/${lang}${item.path}`} className="menu-item">{t(item.menuItem)}</Link>
          </div>
        );
      }
      else {
        return <Link key={item.menuItem} to={`/${lang}${item.path}`} className="menu-item menu-item-sub">{t(item.menuItem)}</Link>
      }
    });
  }
  return (
    <div role='navigation' className={`menu ${isOpen ? 'menu--is-open' : ''}`}>
      <Link to={`/${lang}`} className="menu-item menu-item-main">{t('home')}</Link>
      {buildMenuGroup(GATZA_MENU_ITEMS)}
      {buildMenuGroup(ARAOTZ_MENU_ITEMS)}
    </div>
  );
}