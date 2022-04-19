import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutPageQuery>(graphql`
    query WorksPage($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
        }
        body
      }
    }
  `);

  return (
    <section className="text-center mt-16" id="about">
      <h3 className="">{data.mdx!.frontmatter!.title}</h3>
      <div className="">
        <MDXRenderer>{data.mdx!.body}</MDXRenderer>
      </div>
    </section>
  );
};

export default About;
