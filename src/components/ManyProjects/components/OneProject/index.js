import React from "react"
import {
  Container,
  ImageContainer,
  Image,
  Info,
  List,
  Item,
  VideoContainer,
  Video,
} from "./Styled"
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
  if (project.forsidu_myndband !== null) {
    return (
      <Container>
        <VideoContainer>
          <Video autoPlay muted loop>
            <source type="video/mp4" src={project.forsidu_myndband}></source>
          </Video>
        </VideoContainer>
        <Info>
          <List>
            <Item>{project.kunni}</Item>
            <Item>{project.title}</Item>
          </List>
        </Info>
      </Container>
    )
  } else if (project.forsidu_gif !== null) {
    return (
      <Container>
        <ImageContainer>
          <img src={project.forsidu_gif}></img>
        </ImageContainer>
        <Info>
          <List>
            <Item>{project.kunni}</Item>
            <Item>{project.title}</Item>
          </List>
        </Info>
      </Container>
    )
  } else {
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
}

export default OneProject
