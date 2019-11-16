import React from "react"
import { Container, ImageContainer, Image, Info, List, Item } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const FetchSharpImage = name => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          nodes {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    `}
    render={data =>
      data.allImageSharp.nodes.map((item, index) =>
        item.fluid.originalName === name ? (
          <Image key={index} fluid={item.fluid}></Image>
        ) : (
          ""
        )
      )
    }
  ></StaticQuery>
)

const OneProject = ({ project }) => {
  console.log(project)
  return (
    <Container>
      <ImageContainer>
        {FetchSharpImage(project.forsidu_mynd.replace("/assets/", ""))}
      </ImageContainer>
      <Info>
        <List>
          <Item>{project.kunni}</Item>
          <Item>{project.title}</Item>
        </List>
      </Info>
    </Container>
  )
}

export default OneProject
