import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "./common";

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
    query AboutSection {
      mdx(fileAbsolutePath: { regex: "/sections/about/about.mdx/" }) {
        body
        frontmatter {
          title
          sectionID
          image {
            childImageSharp {
              gatsbyImageData(blurredOptions: {}, width: 250)
            }
          }
        }
      }
    }
  `);

  const { frontmatter, body } = data.mdx!;
  const gatsbyImageData = data.mdx!.frontmatter!.image!.childImageSharp!.gatsbyImageData!;

  return (
    <Section sectionID={frontmatter!.sectionID!} title={frontmatter!.title!}>
      <div className="text-center">
        <GatsbyImage className="rounded-full w-52 z-0" image={getImage(gatsbyImageData)!} alt="aboutImage" />
      </div>
      <div className="my-auto prose prose-base mt-10 min-w-full">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Section>
  );
};

export default About;
