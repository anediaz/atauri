import { Menu } from "components/Menu";
import { ReactNode } from "react";
import AtauriLogo from "./atauri-white-bg.svg";
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
        <a href="/" title="Atauri" aria-label="Atauri">
          <AtauriLogo/>
      </a>
      <LanguageSelector handleLanguageClick={setLanguage} />
    </header>
    <body className="body">
      <Menu /> 
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', border: '1px solid black' }}>
        <main style={{height:'100%', padding:"20px"}}>{children}</main>
      </div>
    </body>
    <Footer />
  </div>
);