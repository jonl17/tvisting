import styled, { css } from "styled-components"
import BackgroundImage from "gatsby-background-image"

const SharedStyle = css`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
`

export const ImageContainer = styled(BackgroundImage)`
  ${SharedStyle};
  height: 100vh;
  background-attachment: fixed !important;
  transition: 1s ease-out;
  /** to counter the page container padding */
  margin: -75px;
`
export const MobileContainer = styled(BackgroundImage)`
  ${SharedStyle};
  height: 100%;
  padding-top: 52.25%;
  background-attachment: initial !important;
  margin: -20px;
`
