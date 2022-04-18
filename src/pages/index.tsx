import { graphql, PageProps } from "gatsby";
import * as React from "react";
import About from "../compenents/sections/about";

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data }) => {
  return (
    <div>
      ${JSON.stringify(data)}
      <About></About>;
    </div>
  );
};

export const query = graphql`
  query IndexPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        seoTitle
        useSeoTitleSuffix
        useSplashScreen
      }
    }
  }
`;

export default IndexPage;
