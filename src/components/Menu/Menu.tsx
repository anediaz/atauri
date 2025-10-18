import { AppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";
import './menu.css';
import { MenuItem } from "router/gatza.constants";
import { HamburgerIcon } from "./HamburgerIcon";

interface MenuProps {
  isOpen: boolean;
  setIsOpen?: () => void;
  language: AppLanguage
}

export const Menu = ({isOpen, setIsOpen, language }:MenuProps) => {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const currentPath = pathname.substring(3);
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS, BESTALDETIK_MENU_ITEMS } = MENU_ITEMS;

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
        <Link key={item.menuItem} to={`/${language}${item.path}`} className={className} aria-label={`click-menu-${item.menuItem}`}>{groupLabel}{label}</Link>
      );
    });
  }

  const navClassName = `menu ${isOpen ? 'menu--is-open' : ''}`;
  const overlayClassName = `menu-overlay ${isOpen ? 'menu-overlay--is-open' : ''}`;
  const mainItemClassName = getClassName('', true);
  return (
    <>
      <HamburgerIcon isOpen={isOpen} onClick={setIsOpen || (() => {})} aria-label='click-menu-hamburger'/>
      <div className={overlayClassName} onClick={setIsOpen} aria-label='click-menu-hamburger'></div>
      <div role='navigation' className={navClassName}>
        <Link to={`/${language}`} className={mainItemClassName} aria-label='click-menu-home'>{t('page.home')}</Link>
        {buildMenuGroup(BESTALDETIK_MENU_ITEMS)}
        {buildMenuGroup(GATZA_MENU_ITEMS)}
        {buildMenuGroup(ARAOTZ_MENU_ITEMS)}
      </div>
    </>
  );
}