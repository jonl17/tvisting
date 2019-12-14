import React from "react"
import { Container } from "./Styled"
import OneProject from "./components/OneProject"
import { useSelector } from "react-redux"

const Projects = ({ projects }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      {projects.map((project, index) => (
        <OneProject key={index} project={project.frontmatter}></OneProject>
      ))}
    </Container>
  )
}

export default Projects
