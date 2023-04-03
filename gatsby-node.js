console.log("dzieje sie tu cos?");
const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  console.log("Co to jest", data.allMarkdownRemark.nodes);
  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/notes/${node.frontmatter.slug}/`,
      component: path.resolve("./src/pages/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
