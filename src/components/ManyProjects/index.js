import React from "react"
import { Container } from "./Styled"
import OneProject from "./components/OneProject"

const Manyprojects = ({ projects }) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <OneProject key={index} project={project.frontmatter}></OneProject>
      ))}
    </Container>
  )
}

export default Manyprojects
