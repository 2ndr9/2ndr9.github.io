import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Section from "./common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Publications = () => {
  const data = useStaticQuery<GatsbyTypes.PublicationsSectionQuery>(graphql`
    query PublicationsSection {
      mdx(fileAbsolutePath: { regex: "/sections/publications/publications.mdx/" }) {
        frontmatter {
          title
          sectionID
        }
      }
      allMdx(
        sort: { fields: [frontmatter___position], order: ASC }
        filter: { fileAbsolutePath: { regex: "/sections/publications/" }, frontmatter: { visible: { eq: true } } }
      ) {
        group(field: frontmatter___catogory) {
          edges {
            node {
              frontmatter {
                conference_name
                authors
                catogory
                order
                pdf
                title
                date
              }
            }
          }
        }
      }
    }
  `);
  const { frontmatter } = data.mdx!;
  const groups = data.allMdx.group;

  const domestic_no_review = groups.filter((g) => g.edges[0].node.frontmatter?.catogory == "国内学会（査読なし）");
  // const domestic_review = groups.filter((g) => g.edges[0].node.frontmatter?.catogory == "国内学会（査読あり）");

  const underline = (authors: string) => {
    const index = authors.indexOf("角田陸");
    if (index != -1) {
      return (
        <p>
          {authors.slice(0, index)}
          <u>{authors.slice(index, index + 3)}</u>
          {authors.slice(index + 3)}
        </p>
      );
    }
  };

  const group_to_html = (
    group: {
      readonly edges: readonly {
        readonly node: {
          readonly frontmatter: GatsbyTypes.Maybe<
            Pick<
              GatsbyTypes.MdxFrontmatter,
              "title" | "conference_name" | "authors" | "catogory" | "order" | "pdf" | "date"
            >
          >;
        };
      }[];
    }[]
  ) => {
    return group.map((publication, key1) => {
      const edges = publication.edges;
      return edges.map((e, key2) => {
        const frontmatter = e.node.frontmatter!;
        return (
          <li key={`${key1}-${key2}`} className="ml-6">
            {underline(frontmatter.authors!)}
            <p>
              {frontmatter.title}
              <a href={frontmatter.pdf} target="_blank" rel="noopener noreferrer" className="ml-3">
                <FontAwesomeIcon className="text-2xl" icon={faFilePdf} />
              </a>
            </p>
            <p>{frontmatter.conference_name}</p>
          </li>
        );
      });
    });
  };

  return (
    <Section sectionID={frontmatter!.sectionID!} title={frontmatter!.title!}>
      <h3 className="text-2xl">国内学会（査読なし）</h3>
      <ul className="list-disc">{group_to_html(domestic_no_review)}</ul>
      {/* <br />
      <h3 className="text-2xl">国内学会（査読あり）</h3>
      <ul className="list-disc">{group_to_html(domestic_review)}</ul> */}
    </Section>
  );
};

export default Publications;
