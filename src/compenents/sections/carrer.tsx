import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";

const Carrer = () => {
  const data = useStaticQuery<GatsbyTypes.CarrerSectionQuery>(graphql`
    query CarrerSection {
      mdx(fileAbsolutePath: { regex: "/index/carrer/carrer.mdx/" }) {
        body
        frontmatter {
          title
          bgColor
          sectionID
        }
      }
    }
  `);

  const { frontmatter, body } = data.mdx!;

  return (
    <Section bgColor={frontmatter!.bgColor!} sectionID={frontmatter!.sectionID!} title={frontmatter!.title!}>
      <div className="prose prose-base min-w-full">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Section>
  );
};

export default Carrer;
