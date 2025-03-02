import { DEFAULT_LANGUAGE, isAppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";
import './menu.css';
import { MenuItem } from "router/gatza.constants";
import AtauriLogo from "./a-circle.svg";

interface MenuProps {
  isOpen: boolean;
  setIsOpen?: () => void;
}

export const Menu = ({isOpen, setIsOpen}:MenuProps) => {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const currentPath = pathname.substring(3);
  const { lang = DEFAULT_LANGUAGE } = useParams();
  if (!isAppLanguage(lang)) { 
    return null;
  }
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS } = MENU_ITEMS;

  const getClassName = (itemPath: string, isGroup: boolean) => { 
    const className = isGroup ? "menu-item menu-item-main" : "menu-item menu-item-sub";
    return currentPath === itemPath ? className + ' menu-item--is-selected' : className;
  }
  const buildMenuGroup = (items:MenuItem[]) => {
    return items.map((item, index) => {
      const isGroup = index === 0;
      const className = getClassName(item.path, isGroup);
      const groupLabel = isGroup ? "+ " : "";
      const label = t(item.menuItem);
      return (
        <Link key={item.menuItem} to={`/${lang}${item.path}`} className={className}>{groupLabel}{label}</Link>
      );
    });
  }

  const navClassName = `menu ${isOpen ? 'menu--is-open' : ''}`;
  const mainItemClassName = getClassName('', true);
  return (
    <>
      <div className="menu-handler" onClick={setIsOpen}><AtauriLogo /></div>
      <div role='navigation' className={navClassName}>
        <Link to={`/${lang}`} className={mainItemClassName}>{t('home')}</Link>
        {buildMenuGroup(GATZA_MENU_ITEMS)}
        {buildMenuGroup(ARAOTZ_MENU_ITEMS)}
      </div>
    </>
  );
}