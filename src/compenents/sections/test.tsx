import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";

const Test = () => {
  const data = useStaticQuery<GatsbyTypes.TestSectionQuery>(graphql`
    query TestSection {
      mdx(fileAbsolutePath: { regex: "/index/test/test.mdx/" }) {
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
      <p className="my-auto prose prose-base mt-10 min-w-full prose-img:rounded-full">
        <MDXRenderer>{body}</MDXRenderer>
      </p>
    </Section>
  );
};

export default Test;
