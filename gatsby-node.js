const path = require("path")
const slugify = require("slugify")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project/index.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "/static/content/verkefni/" }
              }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log("error")
          reject(result.errors)
        }
        // Create pages for each work.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path =
            "/verk/" + slugify(node.frontmatter.title, { lower: true })
          createPage({
            path,
            component: projectTemplate,
            context: {
              id: node.id,
            },
          })
        })
      })
    )
  })
}
