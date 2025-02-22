import { Menu } from "components/Menu";
import { ReactNode } from "react";
import AtauriLogo from "./atauri-black.svg";
import './app-layout.css';
import { Footer } from "./Footer/Footer";
import { AppLanguage } from "app.constants";

export const AppLayout = ({ setLanguage, children }: { setLanguage: (lang:AppLanguage)=> void, children: ReactNode }) => (
  <div className='app-layout'>
    <header role="banner" className="header">
        <a href="/" title="Atauri" aria-label="Atauri">
          <AtauriLogo/>
        </a>
    </header>
    <body className="body">
      <Menu setLanguage={setLanguage} /> 
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', border: '1px solid black' }}>
        <main style={{height:'100%', padding:"20px"}}>{children}</main>
        <div style={{width:'100%', height:'50px', textAlign:'center', backgroundColor: "lightGray"}}>Footer</div>
      </div>
    </body>
    <Footer />
  </div>
);