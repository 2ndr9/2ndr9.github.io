import * as React from "react";
import Layout from "../compenents/layout";
import About from "../compenents/sections/about";
import Carrer from "../compenents/sections/carrer";
import Works from "../compenents/sections/works";
import "../../gatsby-browser";
import Test from "../compenents/sections/test";
import Skills from "../compenents/sections/skills";

const IndexPage = () => {
  return (
    <Layout>
      <About></About>
      <Works></Works>
      <Carrer></Carrer>
      <Test></Test>
      <Skills></Skills>
    </Layout>
  );
};

export default IndexPage;
