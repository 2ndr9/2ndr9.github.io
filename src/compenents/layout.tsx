import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-screen-lg  m-auto">
      <Header></Header>
      <main id="main-content">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
