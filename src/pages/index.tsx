import * as React from "react";
import Layout from "../compenents/layout";
import About from "../compenents/sections/about";
import Carrer from "../compenents/sections/carrer";
import Works from "../compenents/sections/works";
import "../../gatsby-browser";
import Skills from "../compenents/sections/skills";
import Certification from "../compenents/sections/certification";
import Contact from "../compenents/sections/contact";
import Footer from "../compenents/footer";
import Header from "../compenents/header";

const IndexPage = () => {
  return (
    <Layout>
      <Header></Header>
      <About></About>
      <Works></Works>
      <Carrer></Carrer>
      <Skills></Skills>
      <Certification></Certification>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  );
};

export default IndexPage;
