import React from "react"
import { VideoContainer, ImageContainer, Video, Image, Gif } from "./Styled"

const Display = ({ type, project }) => {
  if (type === `video`) {
    return (
      <VideoContainer>
        <Video controls={false} playsInline autoPlay muted loop>
          <source type="video/mp4" src={project.forsidumynd.publicURL}></source>
        </Video>
      </VideoContainer>
    )
  } else if (type === `gif`) {
    return (
      <ImageContainer>
        <Gif src={project.forsidumynd.publicURL}></Gif>
      </ImageContainer>
    )
  } else if (type === `image`) {
    return (
      <ImageContainer>
        <Image fluid={project.forsidumynd.childImageSharp.fluid}></Image>
      </ImageContainer>
    )
  }
}
export default Display
