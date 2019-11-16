import React from "react"
import { graphql } from "gatsby"
import ManyProjects from "../components/ManyProjects"

const Verkin = ({ data }) => {
  return <ManyProjects projects={data.allMarkdownRemark.nodes}></ManyProjects>
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
