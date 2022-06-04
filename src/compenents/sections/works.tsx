import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import GithubIcon from "../icons/github";
import ExternalIcon from "../icons/external";
import { GatsbyImage, getImage, getImageData, IGatsbyImageData } from "gatsby-plugin-image";
import Section from "./common";

const Works = () => {
  const data = useStaticQuery<GatsbyTypes.WorksSectionQuery>(graphql`
    query WorksSection {
      mdx(fileAbsolutePath: { regex: "/sections/works/works.mdx/" }) {
        frontmatter {
          title
          sectionID
        }
      }
      allMdx(
        filter: { fileAbsolutePath: { regex: "/sections/works/" }, frontmatter: { visible: { eq: true } } }
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
                  gatsbyImageData(width: 150)
                }
              }
              position
            }
          }
        }
      }
    }
  `);

  const { title, sectionID } = data!.mdx!.frontmatter!;
  const works = data.allMdx.edges;

  return (
    <Section sectionID={sectionID!} title={title}>
      <div className="grid grid-cols-2 grid-rows-none ">
        {works.map((work, key) => {
          const { body, frontmatter } = work.node;
          return (
            <div key={key} className={`border-b-2 m-2 p-3 relative pb-14`} style={{ order: frontmatter?.position }}>
              <div className="text-3xl mb-7 text-center">{frontmatter!.title}</div>
              <div className="text-center">
                <GatsbyImage
                  image={getImage(work.node.frontmatter?.image?.childImageSharp?.gatsbyImageData!)!}
                  alt="aboutImage"
                />
              </div>
              <p className="text-base my-7 prose prose-sm">
                <MDXRenderer>{body}</MDXRenderer>
              </p>
              <div className="flex justify-around w-full my-7 absolute bottom-0 left-1/2 -translate-x-1/2 ">
                {frontmatter!.github && (
                  <a href={frontmatter!.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon></GithubIcon>
                  </a>
                )}

                {frontmatter!.external && (
                  <a href={frontmatter!.external} target="_blank" rel="noopener noreferrer">
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
