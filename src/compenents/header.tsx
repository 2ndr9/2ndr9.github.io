import React from "react";
import { Link } from "gatsby";
import config from "../../config";
import "../styles/global.css";

const Header = () => {
  const { menu } = config.navLinks;
  return (
    <header className="border-b-2">
      <nav className="flex justify-center my-8">
        {menu.map(({ name, url }, key) => {
          return (
            <Link className="text-lg px-4 m-3" key={key} to={url}>
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
