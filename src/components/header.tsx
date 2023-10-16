import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery<GatsbyTypes.GetSectionTitlesQuery>(graphql`
    query GetSectionTitles {
      allMdx(
        filter: { frontmatter: { sectionID: { regex: "/.*/" } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
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
      <nav className="my-5 overflow-x-auto whitespace-nowrap">
        {data.allMdx.nodes.map((n, key) => {
          return (
            <Link className="text-lg px-4" key={key} to={`/#${n.frontmatter!.sectionID!}`}>
              {n.frontmatter!.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
