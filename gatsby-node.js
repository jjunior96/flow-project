const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.blog === true
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    });
  } else if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.blog === false
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/team${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogs = await graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { blog: { eq: true } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src', 'template', 'blog-post.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
  // Team create pages
  const team = await graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { blog: { eq: false } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  team.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src', 'template', 'team.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
