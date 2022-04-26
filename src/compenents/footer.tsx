import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="flex justify-center my-8">
        <Link className="text-lg px-4 m-3" to="/" aria-label="home">
          home
        </Link>
        <Link className="text-lg px-4 m-3" to="/privacy">
          privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
