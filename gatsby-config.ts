import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://2ndr9.com/github.io/portfolio`,
  },
  plugins: [
    // gatsby-transformer-remarkというものもあるが，これはmdxには非対応．
    // また，画像の読み込みができなかった
    "gatsby-plugin-mdx",
    // tailwind用
    "gatsby-plugin-postcss",
    // grapqhのtype生成
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join("./", "content"),
      },
    },
    // Sharp(画像圧縮ライブラリ)を使えるようにする．低レイヤーのプラグイン
    "gatsby-plugin-sharp",
    // 画像読み込みでImageSharpノードを生成する
    `gatsby-transformer-sharp`,
    // gatsyby-imageが非推奨になり，こちらが推奨
    // <GatsbyImage>などが使える
    `gatsby-plugin-image`,
  ],
};

export default config;
