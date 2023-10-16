import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center my-8">
        <Link className="text-lg px-4 m-3" to="/" aria-label="home">
          home
        </Link>
        <Link className="text-lg px-4 m-3" to="https://github.com/2ndr9/2ndr9.github.io">
          source
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
