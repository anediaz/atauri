import { DEFAULT_LANGUAGE, isAppLanguage } from "app.constants"
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom"
import { MENU_ITEMS } from "router/router.constants";
import './menu.css';

interface MenuProps { 
  isOpen: boolean;
  clickMenu: (v:boolean) => void;
}


export const Menu = ({isOpen, clickMenu }:MenuProps) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { lang = DEFAULT_LANGUAGE } = useParams();
  if (!isAppLanguage(lang)) { 
    return null;
  }
  const { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS } = MENU_ITEMS;

  const clickHeader = () => {
    if (isOpen) {
      navigate(`/${lang}`);
    }
    else {
      clickMenu(true)
    }
  }
  const closeNav = () => clickMenu(false);

  return (
    <div role='navigation' className={`menu ${isOpen ? 'menu--is-open' : ''}`}>
      <h3 onClick={clickHeader}>Atauri</h3>
      <a href="javascript:void(0)" className="menuItem closebtn" onClick={closeNav}>&times;</a>
      {GATZA_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`} className="menuItem">{t(item.menuItem)}</Link>
      ))}
      {ARAOTZ_MENU_ITEMS.map((item) => (
        <Link key={item.menuItem} to={`/${lang}${item.path}`} className="menuItem">{t(item.menuItem)}</Link>
      ))}
    </div>
  );
}