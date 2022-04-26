import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="mx-10 max-w-screen-lg lg:m-auto">
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;
