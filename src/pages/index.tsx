import * as React from "react";
import Layout from "../components/layout";
import "../../gatsby-browser";
import Footer from "../components/footer";
import Header from "../components/header";

import { Helmet } from "react-helmet";
import { graphql, PageProps } from "gatsby";
import Section from "../components/section";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Works from "../components/works";

export const query = graphql`
  query IndexPage {
    sections: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(blurredOptions: {}, width: 250)
              }
            }
            sectionID
            order
          }
          body
        }
      }
    }
    works: allMdx(
      filter: { fileAbsolutePath: { regex: "/works/" }, frontmatter: { visible: { eq: true } } }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            position
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data }) => {
  const sections = data.sections.edges;
  const works = data.works.edges;

  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>Riku Tsunoda's portfolio</title>
        <meta name="description" content="This page is top of my portfolio." />
      </Helmet>

      <Header />

      {sections.map((section) => {
        const child =
          section.node.frontmatter!.sectionID === "works" ? (
            <Works works={works} />
          ) : (
            <div className="prose min-w-full">
              <MDXRenderer>{section.node.body}</MDXRenderer>
            </div>
          );

        return (
          <Section sectionID={section.node.frontmatter!.sectionID!} title={section.node.frontmatter!.title!}>
            {child}
          </Section>
        );
      })}

      <Footer />
    </Layout>
  );
};

export default IndexPage;
