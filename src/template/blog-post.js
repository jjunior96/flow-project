import React from 'react';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { blog: { eq: true } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`;
export default Blog;
