const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // generate slugs for projects
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("src/templates/project/index.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/.*\\\\.md$/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              link
              tech
              image {
                childImageSharp {
                  fluid {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
