import React from "react"
import { VideoContainer, ImageContainer, Video, Image, Gif } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const Display = ({
  type,
  project,
  data: {
    allImageSharp: { nodes },
  },
}) => {
  if (type === `video`) {
    return (
      <VideoContainer>
        <Video autoPlay muted loop>
          <source type="video/mp4" src={project.forsidumyndband}></source>
        </Video>
      </VideoContainer>
    )
  } else if (type === `gif`) {
    return (
      <ImageContainer>
        <Gif src={project.forsidugif}></Gif>
      </ImageContainer>
    )
  } else {
    return (
      <ImageContainer>
        {nodes.map((item, index) =>
          item.fluid.originalName ===
          project.forsidumynd.replace("/myndir/", "") ? (
            <Image key={index} fluid={item.fluid}></Image>
          ) : (
            ""
          )
        )}
      </ImageContainer>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          nodes {
            fluid(
              maxWidth: 600
              traceSVG: {
                color: "white"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    `}
    render={data => <Display data={data} {...props}></Display>}
  ></StaticQuery>
)
