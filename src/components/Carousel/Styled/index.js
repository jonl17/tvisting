import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const CarouselContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  position: relative;
`
export const ImageContainer = styled.div``
export const Image = styled(Img)`
  height: 100vh;
`

export const VideoContainer = styled.div``
export const Video = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100%;
`
export const Gif = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100%;
`
export const Anchor = styled(Link)``
