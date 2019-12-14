import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return (
    <div>
      <p>{frontmatter.title}</p>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        lysing
        hvad_var_gert
        kunni
      }
    }
  }
`

export default ProjectTemplate
