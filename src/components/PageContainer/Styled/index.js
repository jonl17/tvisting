import styled, { css } from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  ${props =>
    props.device === `browser` &&
    css`
      padding: 75px;
    `}
    ${props =>
      props.device === `tablet` &&
      css`
        padding: 75px;
      `}
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 150px 20px 20px 20px;
    `}
`
