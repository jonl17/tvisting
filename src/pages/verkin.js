import React from "react"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import PageContainer from "../components/PageContainer"
import Projects from "../components/Projects"
import { VerticalTitle } from "../constants/components"

const Verkin = ({
  data: {
    allMarkdownRemark: { nodes: verkin },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <PageContainer>
      {device !== undefined ? (
        <>
          <VerticalTitle device={device} title={"Verkin"}></VerticalTitle>
          <Projects projects={verkin}></Projects>
        </>
      ) : (
        <></>
      )}
    </PageContainer>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          lysing
          hvad_var_gert
          kunni
          myndir_og_myndbond {
            mynd
          }
        }
      }
    }
  }
`

export default Verkin
