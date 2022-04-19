import * as React from "react";
import Layout from "../compenents/layout";
import About from "../compenents/sections/about";
import Works from "../compenents/sections/works";

const IndexPage = () => {
  return (
    <Layout>
      <About></About>
      <Works></Works>
    </Layout>
  );
};

export default IndexPage;
