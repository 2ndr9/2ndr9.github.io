import * as React from "react";
import Layout from "../compenents/layout";
import About from "../compenents/sections/about";
import Carrer from "../compenents/sections/carrer";
import Works from "../compenents/sections/works";
import "../../gatsby-browser";
import Skills from "../compenents/sections/skills";
import Certification from "../compenents/sections/certification";
import Contact from "../compenents/sections/contact";

const IndexPage = () => {
  return (
    <Layout>
      <About></About>
      <Works></Works>
      <Carrer></Carrer>
      <Skills></Skills>
      <Certification></Certification>
      <Contact></Contact>
    </Layout>
  );
};

export default IndexPage;
