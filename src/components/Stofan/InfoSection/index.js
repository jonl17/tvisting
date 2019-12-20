import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { InfoContainer } from "./Styled"

/** components */
import EfstaVideo from "./EfstaVideo"
import Texti from "./Texti"

const InfoSection = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        efstavideo: { publicURL },
      },
    },
  },
}) => {
  return (
    <InfoContainer>
      <EfstaVideo videosrc={publicURL}></EfstaVideo>
      <Texti title={title} texti={html}></Texti>
    </InfoContainer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/static/content/stofan/" }) {
          html
          frontmatter {
            title
            efstavideo {
              publicURL
            }
          }
        }
      }
    `}
    render={data => <InfoSection data={data} {...props}></InfoSection>}
  ></StaticQuery>
)
