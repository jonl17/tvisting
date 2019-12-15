import React from "react"
import { Container } from "./Styled"

/** components */
import Info from "./Info"
import Display from "./Display"

const OneProject = ({ project }) => {
  console.log(project.forsidumynd)
  if (project.forsidumynd.childImageSharp) {
    // it's an image!
    return (
      <Container>
        <Display project={project} type={`image`}></Display>
        <Info project={project}></Info>
      </Container>
    )
  }
}

export default OneProject
