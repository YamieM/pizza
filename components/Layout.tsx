import { FC, ReactNode } from "react";
import { Header } from "./header";

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
  </div>
);
export default Layout;
