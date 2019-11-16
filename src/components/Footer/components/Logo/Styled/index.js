import styled from "styled-components"
import SVG from "../../../../../../static/assets/Tvist_logo.svg"
import { Link } from "gatsby"

export const Container = styled(Link)`
  grid-area: logo;
  margin: auto;
`
export const Image = styled(SVG)`
  height: 70px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`
