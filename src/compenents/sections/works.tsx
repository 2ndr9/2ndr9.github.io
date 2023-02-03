import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
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
              position
            }
          }
        }
      }
    }
  `);

  const { title, sectionID } = data!.mdx!.frontmatter!;
  const works = data.allMdx.edges;

  // positionに小数点を許容したいが，cssのorderプロパティは小数点を受け付けないため，
  // frontmatter__positionでsortして取得したworksの自然数の順番を保持する．
  let position_order_count = 0;

  return (
    <Section sectionID={sectionID!} title={title}>
      <ul className="overflow-x-scroll flex">
        {works.map((work, key) => {
          position_order_count++;
          const { body } = work.node;
          return (
            <li
              key={key}
              className={`mr-8 relative pb-4 flex-shrink-0 w-4/6 md:w-2/4 lg:w-2/5 prose prose-sm text-center`}
              style={{ order: position_order_count }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Works;
