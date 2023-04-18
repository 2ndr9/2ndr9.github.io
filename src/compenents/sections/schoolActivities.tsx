import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";

const SchoolActivities = () => {
  const data = useStaticQuery<GatsbyTypes.schoolActivitiesSectionQuery>(graphql`
    query schoolActivitiesSection {
      mdx(fileAbsolutePath: { regex: "/sections/schoolActivities/schoolActivities.mdx/" }) {
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

export default SchoolActivities;
