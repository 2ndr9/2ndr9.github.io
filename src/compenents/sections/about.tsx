import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 4rem;
`;

const About = () => {
  const data = useStaticQuery<GatsbyTypes.AboutPageQuery>(graphql`
    query AboutPage($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        body
      }
    }
  `);

  return (
    <StyledSection id="about">
      <h3 className="section-title">{data.mdx!.frontmatter!.title}</h3>
      <div className="text-content">
        <MDXRenderer>{data.mdx!.body}</MDXRenderer>
      </div>
    </StyledSection>
  );
};

export default About;
