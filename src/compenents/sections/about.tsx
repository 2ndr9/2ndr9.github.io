import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "./common";

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
    query AboutSection {
      mdx(fileAbsolutePath: { regex: "/index/about/about.mdx/" }) {
        body
        frontmatter {
          title
          bgColor
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
    <Section bgColor={frontmatter!.bgColor!} sectionID={frontmatter!.sectionID!} title={frontmatter!.title!}>
      <div className="flex justify-center">
        <GatsbyImage className="rounded-full mr-40" image={getImage(gatsbyImageData)!} alt="aboutImage" />
        <p className="text-base my-auto">
          <MDXRenderer>{body}</MDXRenderer>
        </p>
      </div>
    </Section>
  );
};

export default About;
