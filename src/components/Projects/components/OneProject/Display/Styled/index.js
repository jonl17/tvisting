import styled from "styled-components"
import Img from "gatsby-image"

export const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`
export const Image = styled(Img)``

export const VideoContainer = styled.div`
  padding: 0 !important;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`
export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Gif = styled.img`
  width: 100%;
`
