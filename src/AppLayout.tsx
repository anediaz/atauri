import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => (
    <div>
        <div>Header</div>
        <main>{children}</main>
        <div>Footer</div>
  </div>
);