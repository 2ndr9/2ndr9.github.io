import "../styles/global.css";
import React, { FC } from "react";
import "../styles/global.css";
import Header from "./header";
import Footer from "./footer";

const Layout: FC = ({ children }) => {
  return (
    <div className="" id="layout-wrapper">
      <Header></Header>
      <main id="main-content">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
