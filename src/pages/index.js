import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { blog: { eq: true } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
        }
        nodes {
          id
        }
      }
    }
  `);
  const postList = allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { background, category, title, description, date },
            timeToRead,
          },
        }) => (
          <PostItem
            link={slug}
            background={background}
            category={category}
            date={date}
            timeRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  );
};

export default IndexPage;
