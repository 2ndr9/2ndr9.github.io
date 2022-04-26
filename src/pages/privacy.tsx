import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../compenents/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Footer from "../compenents/footer";

const PrivacyPage: React.FC<PageProps<GatsbyTypes.PrivacyQuery>> = ({ data }) => {
  return (
    <Layout>
      <div className="prose prose-base text-center mx-auto py-5">
        <MDXRenderer>{data.mdx!.body}</MDXRenderer>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export const query = graphql`
  query Privacy {
    mdx(fileAbsolutePath: { regex: "/privacy/privacy.mdx/" }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
export default PrivacyPage;
