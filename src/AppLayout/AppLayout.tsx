import { Menu } from "components/Menu/Menu";
import { ReactNode, useState } from "react";
import AtauriBanner from "./atauri-black.svg";

import './app-layout.css';
import { Footer } from "./Footer/Footer";
import { AppLanguage } from "app.constants";
import { LanguageSelector } from "components/LanguageSelector/LanguageSelector";

interface AppLayoutProps {
  setLanguage: (lang: AppLanguage) => void;
  children: ReactNode;
}

export const AppLayout = ({ setLanguage, children }: AppLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className='app-layout'>
      <header role="banner" className="header">
        <a title="Atauri" aria-label="Atauri">
          <AtauriBanner />
        </a>
        <LanguageSelector handleLanguageClick={setLanguage} />
      </header>
      <body className="body">
        <Menu isOpen={isMenuOpen} clickMenu={(v) => setIsMenuOpen(v)}/>
        <div className={`content ${isMenuOpen ? 'content--menu-is-open' : ''}`}>
          <main>{children}</main>
        </div>
      </body>
      <Footer />
    </div>
  )
}