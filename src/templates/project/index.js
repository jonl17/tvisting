import React from "react"
import { graphql } from "gatsby"

/** components */
import TopImage from "./top-image"

const ProjectTemplate = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return <TopImage></TopImage>
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
