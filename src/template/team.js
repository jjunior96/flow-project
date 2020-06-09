import React from 'react';
import { graphql } from 'gatsby';

const Team = ({ data }) => {
  const team = data.markdownRemark;
  return (
    <>
      <h1>{team.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: team.html }} />
    </>
  );
};
export const query = graphql`
  query Team($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { blog: { eq: false } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`;
export default Team;
