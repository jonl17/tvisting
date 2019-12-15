import React from "react"
import { VideoContainer, ImageContainer, Video, Image, Gif } from "./Styled"

const Display = ({ type, project }) => {
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
        <Image fluid={project.forsidumynd.childImageSharp.fluid}></Image>
      </ImageContainer>
    )
  }
}
export default Display
