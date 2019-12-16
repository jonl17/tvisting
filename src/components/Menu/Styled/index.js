import styled, { css } from "styled-components"
import { COLORS, LAYERS } from "../../../constants"
import SVG from "../../../../static/myndir/svgs/Tvist_logo.svg"
import { Link } from "gatsby"

const ContainerStyle = css`
  position: fixed;
  top: 0;
  left: 0%;
  background: ${COLORS.red};
  height: 100%;
  width: 100%;
  z-index: ${LAYERS.menu};
  /** centering items */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
`
/** prop effects */
export const Container = styled.div`
  ${ContainerStyle};
  /** the default closed state */
  opacity: 0;
  pointer-events: none;
  ${props =>
    props.open === "open" &&
    css`
      /** open state */
      opacity: 1;
      pointer-events: all;
    `}
`
export const LogoAnchor = styled(Link)``
export const Logo = styled(SVG)`
  height: 75px;
  position: absolute;
  left: 0%;
  top: 0%;
  box-sizing: border-box;
  padding: 19px 18px 17px 25px;
`
