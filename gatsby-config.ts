import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://2ndr9.github.io/`,
  },
  plugins: [
    // Sharp(画像圧縮ライブラリ)を使えるようにする．低レイヤーのプラグイン
    "gatsby-plugin-sharp",
    // 画像読み込みでImageSharpノードを生成する
    `gatsby-transformer-sharp`,
    {
      // gatsby-transformer-remarkというものもあるが，これはmdxには非対応．
      // また，画像の読み込みができなかった
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            // Processes images in markdown so they can be used in the production build.
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    // tailwind用
    "gatsby-plugin-postcss",
    // grapqhのtype生成
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
      },
    },
    // gatsyby-imageが非推奨になり，こちらが推奨
    // <GatsbyImage>などが使える
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
  ],
};

export default config;
