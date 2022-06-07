import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "./common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

  const { title, sectionID } = data!.mdx!.frontmatter!;
  const works = data.allMdx.edges;

  return (
    <Section sectionID={sectionID!} title={title}>
      <ul className="overflow-x-scroll flex">
        {works.map((work, key) => {
          const { body, frontmatter } = work.node;
          return (
            <li
              key={key}
              className={`mr-8 p-1 relative pb-14 flex-shrink-0 w-4/6 md:w-2/4 lg:w-2/5`}
              style={{ order: frontmatter?.position }}
            >
              <div className="text-3xl mb-7 text-center">{frontmatter!.title}</div>
              <div className="text-center">
                <GatsbyImage
                  image={getImage(work.node.frontmatter?.image?.childImageSharp?.gatsbyImageData!)!}
                  alt="aboutImage"
                />
              </div>
              <p className="text-base my-6 prose prose-sm">
                <MDXRenderer>{body}</MDXRenderer>
              </p>
              <div className="flex justify-around w-full my-7 absolute bottom-0 left-1/2 -translate-x-1/2 ">
                {frontmatter!.github && (
                  <a href={frontmatter!.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="text-2xl" icon={faGithub} />
                  </a>
                )}

                {frontmatter!.external && (
                  <a href={frontmatter!.external} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="text-2xl" icon={faArrowUpRightFromSquare} />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Works;
