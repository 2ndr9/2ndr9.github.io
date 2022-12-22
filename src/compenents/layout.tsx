import React, { FC } from "react";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const Layout: FC = ({ children }) => {
  return (
    <div className="mx-10 max-w-screen-lg lg:m-auto">
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;
