import styled, { css } from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;

  ${props =>
    props.device === `browser` &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`
