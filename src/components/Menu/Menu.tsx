import { AppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";
import './menu.css';
import { MenuItem } from "router/gatza.constants";
import { HamburgerIcon } from "./HamburgerIcon";
import { useDynamicMenu } from "hooks/useDynamicMenu";
import { DynamicAlbumItem } from "utils/FlickrAPI";

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
  const { albums, isLoading } = useDynamicMenu();

  const getClassName = (itemPath: string, isGroup: boolean) => {
    const className = isGroup ? "menu-item menu-item-main" : "menu-item menu-item-sub";
    return currentPath === itemPath ? className + ' menu-item--is-selected' : className;
  }

  // Build menu group from static MenuItem[] (with translation keys)
  const buildStaticMenuGroup = (items:MenuItem[]) => {
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

  // Build dynamic Albums section
  const buildAlbumsSection = (items: DynamicAlbumItem[]) => {
    if (items.length === 0) return null;

    return (
      <>
        {/* Albums section header */}
        <Link
          to={`/${language}/albums`}
          className="menu-item menu-item-main"
          aria-label="click-menu-albums"
        >
          + {t('menu.albums')}
        </Link>

        {/* Album items */}
        {items.map((album) => {
          const className = getClassName(album.path, false);
          return (
            <Link
              key={`album-${album.photosetId}`}
              to={`/${language}${album.path}`}
              className={className}
              aria-label={`click-menu-album-${album.photosetId}`}
            >
              {album.title}
            </Link>
          );
        })}
      </>
    );
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

        {/* Keep all static menu items */}
        {buildStaticMenuGroup(BESTALDETIK_MENU_ITEMS)}
        {buildStaticMenuGroup(GATZA_MENU_ITEMS)}
        {buildStaticMenuGroup(ARAOTZ_MENU_ITEMS)}

        {/* Add dynamic Albums section at the end */}
        {!isLoading && albums.length > 0 && buildAlbumsSection(albums)}
      </div>
    </>
  );
}