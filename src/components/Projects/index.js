import React from "react"
import { Container } from "./Styled"
import OneProject from "./components/OneProject"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

/** components */

const Projects = ({
  data: {
    allMarkdownRemark: { nodes: projects },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      {projects.map((project, index) => (
        <OneProject key={index} project={project.frontmatter}></OneProject>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/content/verkefni/" } }
        ) {
          nodes {
            frontmatter {
              title
              kunni
              forsidumynd {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                    originalImg
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props}></Projects>}
  ></StaticQuery>
)
