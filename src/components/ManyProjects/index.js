import React from "react"
import { Container } from "./Styled"
import OneProject from "./components/OneProject"
import { connect } from "react-redux"

const Manyprojects = ({ projects, device }) => {
  return (
    <Container device={device}>
      {projects.map((project, index) => (
        <OneProject key={index} project={project.frontmatter}></OneProject>
      ))}
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Manyprojects)
