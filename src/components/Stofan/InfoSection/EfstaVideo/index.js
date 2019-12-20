import React from "react"
import { VideoContainer, Video } from "./Styled"

const EfstaVideo = ({ videosrc }) => {
  return (
    <VideoContainer>
      <Video autoPlay muted playsInline loop>
        <source type="video/mp4" src={videosrc}></source>
      </Video>
    </VideoContainer>
  )
}

export default EfstaVideo
