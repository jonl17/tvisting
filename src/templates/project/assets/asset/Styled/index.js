import styled, { css } from "styled-components"
import Img from "gatsby-image"
import SVG from "../../../../../../static/myndir/svgs/Play_takki.svg"

export const ImageContainer = styled.div`
  ${props =>
    props.mutant === "mutant" &&
    css`
      grid-column: 1 / 3;
    `}
  position: relative;
`
export const Image = styled(Img)``

export const Video = styled.video`
  width: 100%;
  &&:hover {
    cursor: pointer;
  }
`
export const Play = styled(SVG)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20%;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.display === "hide" &&
    css`
      display: none;
    `}
`
