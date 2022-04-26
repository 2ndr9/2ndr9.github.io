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
      <div className="grid grid-cols-2 grid-rows-none ">
        {works.map((work, key) => {
          const { body, frontmatter } = work.node;
          return (
            <div key={key} className="border-b-2 m-2 p-3">
              <div className="text-3xl mb-7 text-center">{frontmatter!.title}</div>
              <div className="text-center">
                <GatsbyImage
                  image={getImage(work.node.frontmatter!.image!.childImageSharp!.gatsbyImageData!)!}
                  alt="aboutImage"
                />
              </div>
              <p className="text-base my-7 prose prose-sm">
                <MDXRenderer>{body}</MDXRenderer>
              </p>
              <div className="flex justify-around w-4/12 mx-auto my-7">
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
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Works;
