import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";

const Publications = () => {
  const data = useStaticQuery<GatsbyTypes.PublicationsSectionQuery>(graphql`
    query PublicationsSection {
      mdx(fileAbsolutePath: { regex: "/sections/publications/publications.mdx/" }) {
        body
        frontmatter {
          title
          sectionID
        }
      }
    }
  `);
  const { frontmatter, body } = data.mdx!;

  return (
    <Section sectionID={frontmatter!.sectionID!} title={frontmatter!.title!}>
      <p className="my-auto prose prose-base mt-10 min-w-full">
        <MDXRenderer>{body}</MDXRenderer>
      </p>
    </Section>
  );
};

export default Publications;
