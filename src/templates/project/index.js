import React from "react"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import TopImage from "./top-image"
import { VerticalTitle } from "../../constants/components"
import Content from "./content"
import Assets from "./assets"
import PageContainer from "../../components/PageContainer"

const ProjectTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, lysing, hvad_var_gert, kunni, efstamynd, hlutir },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <PageContainer>
      <VerticalTitle device={device} title={kunni}></VerticalTitle>
      <TopImage mynd={efstamynd}></TopImage>
      <Content
        hvad_var_gert={hvad_var_gert}
        about={lysing}
        title={title}
        hlutir={hlutir}
      ></Content>
      <Assets assets={hlutir}></Assets>
    </PageContainer>
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
            fluid(maxWidth: 1080, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hlutir {
          hlutur {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1280, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
