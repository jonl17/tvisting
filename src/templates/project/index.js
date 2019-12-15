import React from "react"
import { graphql } from "gatsby"

/** components */
import TopImage from "./top-image"

const ProjectTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, lysing, hvad_var_gert, kunni, efstamynd },
    },
  },
}) => {
  return (
    <>
      <TopImage mynd={efstamynd}></TopImage>
    </>
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
        efstamynd {
          childImageSharp {
            fluid(maxWidth: 1480, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
