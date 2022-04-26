import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";

const Carrer = () => {
  const data = useStaticQuery<GatsbyTypes.CarrerSectionQuery>(graphql`
    query CarrerSection {
      mdx(fileAbsolutePath: { regex: "/sections/carrer/carrer.mdx/" }) {
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
      <div className="prose prose-base min-w-full">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Section>
  );
};

export default Carrer;
