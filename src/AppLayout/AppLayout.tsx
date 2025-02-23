import { Menu } from "components/Menu";
import { ReactNode } from "react";
import AtauriLogo from "../../public/a-circle.svg";
import AtauriBanner from "./atauri-black.svg";

import './app-layout.css';
import { Footer } from "./Footer/Footer";
import { AppLanguage } from "app.constants";
import { LanguageSelector } from "components/LanguageSelector/LanguageSelector";

interface AppLayoutProps {
  setLanguage: (lang: AppLanguage) => void;
  children: ReactNode;
}

export const AppLayout = ({ setLanguage, children }: AppLayoutProps) => (
  <div className='app-layout'>
    <header role="banner" className="header">
      <a title="Atauri" aria-label="Atauri">
          <AtauriBanner/>
      </a>
      <LanguageSelector handleLanguageClick={setLanguage} />
    </header>
    <body className="body">
      <Menu /> 
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
        <main style={{height:'100%', padding:"20px"}}>{children}</main>
      </div>
    </body>
    <Footer />
  </div>
);