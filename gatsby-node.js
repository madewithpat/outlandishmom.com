/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.error) {
        console.error(result.error.toString());
        reject(result.error);
      }

      const posts = result.data.allMarkdownRemark.edges;
      posts.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/blog-post.jsx"),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};

// This is where we create nodes for the graphql schema
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "blog" });
    createNodeField({
      name: "slug",
      node,
      value: slug
    });
  }
};
