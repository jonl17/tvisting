import React from "react"
import { graphql } from "gatsby"
import ManyProjects from "../components/ManyProjects"
import { VerticalTitle } from "../constants/components"

const Verkin = ({ data }) => {
  return (
    <>
      <VerticalTitle title={"Verkin"}></VerticalTitle>
      <ManyProjects projects={data.allMarkdownRemark.nodes}></ManyProjects>
    </>
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
          forsidu_mynd
        }
      }
    }
  }
`

export default Verkin
