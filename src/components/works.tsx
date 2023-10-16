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
  // positionに小数点を許容したいが，cssのorderプロパティは小数点を受け付けないため，
  // frontmatter__positionでsortして取得したworksの自然数の順番を保持する．
  let position_order_count = 0;

  return (
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
  );
};

export default Works;
