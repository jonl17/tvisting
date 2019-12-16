import styled, { css } from "styled-components"

export const Container = styled.div`
  padding-top: 125px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "title ..."
    "about hlutverk";
  ${props =>
    props.device === `mobile` &&
    css`
      padding-top: 30px;
      grid-template-rows: auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "hlutverk"
        "title"
        "about";
    `}
`
