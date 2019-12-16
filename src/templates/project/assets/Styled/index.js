import styled, { css } from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: 1fr;
    `}
`
