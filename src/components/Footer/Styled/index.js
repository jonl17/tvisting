import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: rgb(230, 80, 100);
  display: grid;
  grid-template-columns: repeat(3, 15%) auto 30%;
  grid-template-areas: "logo address mail-phone ... social-links";
  ${props =>
    props.device === `tablet` &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "logo address mail-phone social-links";
    `}
  ${props =>
    props.device === `mobile` &&
    css`
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "logo address"
        "social-links mail-phone";
    height: 150px;
    box-sizing: border-box;
}
  `}
`
