import { Menu } from "components/Menu/Menu";
import { ReactNode, useState } from "react";
import AtauriBanner from "./atauri-black.svg";
import AtauriLogo from "./a-circle.svg";


import './app-layout.css';
import { Footer } from "./Footer/Footer";
import { AppLanguage } from "app.constants";
import { LanguageSelector } from "components/LanguageSelector/LanguageSelector";

interface AppLayoutProps {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  children: ReactNode;
}

export const AppLayout = ({ language, setLanguage, children }: AppLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className='app-layout'>
      <header role="banner" className="header">
        <div className="menu-handler" onClick={() => setIsMenuOpen(!isMenuOpen)}><AtauriLogo />Menua</div>
        <a title="Atauri" aria-label="Atauri">
          <AtauriBanner />
        </a>
        <LanguageSelector currentLanguage={language} handleLanguageClick={setLanguage} />
      </header>
      <div className="body">
        <Menu isOpen={isMenuOpen} />
        <div className={`content ${isMenuOpen ? 'content--menu-is-open' : ''}`}>
          <main>{children}</main>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}