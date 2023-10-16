import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

type WorksProps = {
  works: readonly {
    readonly node: Pick<GatsbyTypes.Mdx, "body"> & {
      readonly frontmatter: GatsbyTypes.Maybe<Pick<GatsbyTypes.MdxFrontmatter, "position">>;
    };
  }[];
};

const Works: FC<WorksProps> = ({ works }) => {
  return (
    <ul className="overflow-x-scroll flex">
      {works.map((work, key) => {
        const { body } = work.node;

        return (
          <li
            key={key}
            className={`mr-8 relative pb-4 flex-shrink-0 w-4/6 md:w-2/4 lg:w-2/5 prose prose-sm text-center`}
            style={{ order: key }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </li>
        );
      })}
    </ul>
  );
};

export default Works;
