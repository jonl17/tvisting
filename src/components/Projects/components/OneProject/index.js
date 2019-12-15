import React from "react"
import { Container } from "./Styled"

/** components */
import Info from "./Info"
import Display from "./Display"

const OneProject = ({ project }) => {
  if (project.forsidumyndband !== null && project.forsidumyndband !== "") {
    // it's video !
    return (
      <Container>
        <Display project={project} type={`video`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  } else if (project.forsidugif !== null && project.forsidugif !== "") {
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
