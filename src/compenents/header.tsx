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
      <nav className="py-5 lg:py-0 lg:my-8 overflow-x-auto">
        {data.allMdx.nodes.map((n, key) => {
          return (
            <Link className="text-lg px-2 lg:px-4 lg:m-3" key={key} to={`/#${n.frontmatter!.sectionID!}`}>
              {n.frontmatter!.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
