import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://2ndr9.com/github.io/portfolio`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join("./", "content"),
      },
    },
  ],
};

export default config;
