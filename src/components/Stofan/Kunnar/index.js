import React from "react"
import { KunnarContainer, KunniBox, Image } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Title } from "../../../constants/components"

const Kunnar = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <>
      <Title padding={"50px"} title="Viðskiptavinir"></Title>
      <KunnarContainer>
        {nodes.map(item => (
          <KunniBox>
            <Image src={item.frontmatter.mynd.publicURL}></Image>
          </KunniBox>
        ))}
      </KunnarContainer>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/content/kunnar/" } }
        ) {
          nodes {
            frontmatter {
              title
              mynd {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => <Kunnar data={data} {...props}></Kunnar>}
  ></StaticQuery>
)
