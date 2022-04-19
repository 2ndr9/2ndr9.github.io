import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
    query AboutSection {
      mdx(fileAbsolutePath: { regex: "/index/about/" }) {
        body
        frontmatter {
          title
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
    <section className="text-center  flex justify-center" id="about">
      <GatsbyImage className="rounded-full mr-40" image={getImage(gatsbyImageData)!} alt="aboutImage" />
      <div>
        <h2 className="text-4xl">{frontmatter!.title}</h2>
        <p className="text-base">
          <MDXRenderer>{body}</MDXRenderer>
        </p>
      </div>
    </section>
  );
};

export default About;
