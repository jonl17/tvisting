import React from "react"
import { Container } from "./Styled"

/** components */
import Info from "./Info"
import Display from "./Display"

const OneProject = ({ project }) => {
  if (project.forsidu_myndband !== null && project.forsidu_myndband !== "") {
    // it's video !
    return (
      <Container>
        <Display project={project} type={`video`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  } else if (project.forsidu_gif !== null && project.forsidu_gif !== "") {
    // it's a gif !
    return (
      <Container>
        <Display project={project} type={`gif`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  } else {
    // it's an image !
    return (
      <Container>
        <Display project={project} type={`image`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  }
}

export default OneProject
