import React from "react"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import TopImage from "./top-image"
import { VerticalTitle } from "../../constants/components"
import Content from "./content"

const ProjectTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, lysing, hvad_var_gert, kunni, efstamynd },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <>
      <VerticalTitle device={device} title={title}></VerticalTitle>
      <TopImage mynd={efstamynd}></TopImage>
      <Content title={title}></Content>
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
