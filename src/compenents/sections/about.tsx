import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
    query AboutSection {
      mdx(fileAbsolutePath: { regex: "/index/about/about.mdx/" }) {
        body
        frontmatter {
          title
          bgColor
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
    <section className={`text-center ${frontmatter!.bgColor} p-8`} id="about">
      <h2 className="text-4xl my-3">{frontmatter!.title}</h2>
      <div className="flex justify-center my-8">
        <GatsbyImage className="rounded-full mr-40" image={getImage(gatsbyImageData)!} alt="aboutImage" />
        <p className="text-base my-auto">
          <MDXRenderer>{body}</MDXRenderer>
        </p>
      </div>
    </section>
  );
};

export default About;
