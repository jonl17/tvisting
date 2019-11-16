import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Container = styled.div`
  position: relative;
  padding-top: 57.25%;
  width: 100%;
  height: 0;
`
export const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`
export const Image = styled(Img)``
export const Info = styled(Link)`
  position: absolute;
  display: grid;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  background: rgba(16, 16, 16, 0.3);
  top: 0;
  padding-top: 56.25%;
  width: 100%;
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
`
export const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const Item = styled.li`
  font-size: 20px;
  text-transform: none;
  font-weight: normal;
  margin-top: 20%;
  color: white;
  margin: 0;
`

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
`
