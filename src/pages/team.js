import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import TeamItem from '../components/TeamItem';

const TeamPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { blog: { eq: false } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              github_username
              name
              responsibility
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
      <SEO title="Team" />
      {postList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { name, responsibility, github_username },
          },
        }) => (
          <TeamItem
            link={slug}
            avatar={github_username}
            name={name}
            responsibility={responsibility}
          />
        )
      )}
    </Layout>
  );
};

export default TeamPage;
