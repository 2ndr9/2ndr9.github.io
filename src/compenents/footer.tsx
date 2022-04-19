import React, { useContext } from "react";
import { Link } from "gatsby";
import config from "../../config";

const Footer = () => {
  const footerLinks = config.footerLinks;

  return (
    <footer className="flex justify-center">
      <Link className="text-base m-3" to="/" aria-label="home">
        home
      </Link>
      {footerLinks.map(({ name, url }, key) => (
        <Link className="text-base m-3" key={key} to={url}>
          {name}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
