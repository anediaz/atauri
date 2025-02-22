import { Menu } from "components/Menu";
import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", height: "100vh", width:'100%', justifyContent: "space-between" }}>
    <div style={{display:'grid', gridTemplateColumns: "1fr 6fr", height:'100%'}}>
      <Menu />   
      <div style={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'space-between', border: '1px solid black'}}>
        <div style={{width:'100%', height:'100px', textAlign:'center', backgroundColor: "lightBlue"}}>Header</div>
        <main style={{height:'100%', padding:"20px"}}>{children}</main>
        <div style={{width:'100%', height:'50px', textAlign:'center', backgroundColor: "lightGray"}}>Footer</div>
      </div>
    </div>
  </div>
);