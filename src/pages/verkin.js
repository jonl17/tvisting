import React from "react"
import { graphql } from "gatsby"
import ManyProjects from "../components/ManyProjects"
import { VerticalTitle } from "../constants/components"
import PageContainer from "../components/PageContainer"
import { connect } from "react-redux"

const Verkin = ({ data, device }) => {
  return (
    <PageContainer>
      <VerticalTitle device={device} title={"Verkin"}></VerticalTitle>
      <ManyProjects projects={data.allMarkdownRemark.nodes}></ManyProjects>
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
          forsidu_mynd
          forsidu_myndband
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Verkin)
