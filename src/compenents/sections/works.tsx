import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import GithubIcon from "../icons/github";
import ExternalIcon from "../icons/external";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "./common";

const Works = () => {
  const data = useStaticQuery<GatsbyTypes.WorksSectionQuery>(graphql`
    query WorksSection {
      mdx(fileAbsolutePath: { regex: "/index/works/works.mdx/" }) {
        frontmatter {
          title
          bgColor
          sectionID
        }
      }
      allMdx(
        filter: { fileAbsolutePath: { regex: "/index/works/" }, frontmatter: { visible: { eq: true } } }
        sort: { fields: [frontmatter___position], order: ASC }
      ) {
        edges {
          node {
            body
            frontmatter {
              title
              external
              github
              image {
                childImageSharp {
                  gatsbyImageData(blurredOptions: {}, width: 150)
                }
              }
              position
            }
          }
        }
      }
    }
  `);

  const { title, bgColor, sectionID } = data!.mdx!.frontmatter!;
  const works = data.allMdx.edges;

  return (
    <Section bgColor={bgColor!} sectionID={sectionID!} title={title}>
      <div className="flex justify-center">
        {works.map((work, key) => {
          const { body, frontmatter } = work.node;
          return (
            <div key={key}>
              <div className="text-3xl">{frontmatter!.title}</div>
              <p className="text-base my-3">
                <MDXRenderer>{body}</MDXRenderer>
              </p>
              <div className="flex justify-between w-4/12 mx-auto my-3">
                {frontmatter!.github && (
                  <a href={frontmatter!.github}>
                    <GithubIcon></GithubIcon>
                  </a>
                )}
                {frontmatter!.external && (
                  <a href={frontmatter!.external}>
                    <ExternalIcon></ExternalIcon>
                  </a>
                )}
              </div>
              <GatsbyImage
                className="my-3"
                image={getImage(work.node.frontmatter!.image!.childImageSharp!.gatsbyImageData!)!}
                alt="aboutImage"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Works;
