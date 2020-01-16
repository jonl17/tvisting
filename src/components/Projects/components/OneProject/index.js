import React from "react"
import { Container } from "./Styled"

/** components */
import Info from "./Info"
import Display from "./Display"

const OneProject = ({ project }) => {
  if (project.forsidumynd.skra.childImageSharp) {
    // it's an image!
    return (
      <Container>
        <Display project={project} type={`image`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  } else {
    let type = "video" // it's a video!
    if (project.forsidumynd.skra.publicURL.includes(".gif")) {
      type = "gif" // it's a gif!
    }
    return (
      <Container>
        <Display project={project} type={type}></Display>
        <Info project={project}></Info>
      </Container>
    )
  }
}

export default OneProject
