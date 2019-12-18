import React from "react"
import { graphql } from "gatsby"

/** components */
import Carousel from "../components/Carousel"

const index = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return <Carousel verkefni={nodes}></Carousel>
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { aforsidu: { eq: true } }
        fileAbsolutePath: { regex: "/static/content/verkefni/" }
      }
    ) {
      nodes {
        frontmatter {
          title
          forsidumynd {
            publicURL
            childImageSharp {
              fluid(quality: 80, maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default index
