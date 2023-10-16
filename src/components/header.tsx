import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery<GatsbyTypes.GetSectionTitlesQuery>(graphql`
    query GetSectionTitles {
      allMdx(filter: { fileAbsolutePath: { regex: "/index/" } }, sort: { fields: frontmatter___order, order: ASC }) {
        nodes {
          frontmatter {
            title
            order
            sectionID
          }
        }
      }
    }
  `);

  return (
    <header className="border-b-2 text-center">
      <nav className="py-5 overflow-x-auto whitespace-nowrap">
        {data.allMdx.nodes.map((n, key) => {
          return (
            <Link className="py-5 text-lg px-4 hover:bg-gray-200" key={key} to={`/#${n.frontmatter!.sectionID!}`}>
              {n.frontmatter!.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
