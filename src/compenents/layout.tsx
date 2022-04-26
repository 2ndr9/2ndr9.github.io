import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-screen-lg  m-auto">
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;
