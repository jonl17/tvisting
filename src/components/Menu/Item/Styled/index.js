import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div``
export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.2s ease-in-out;
  &&:hover {
    text-shadow: 5px 5px darkred;
  }
  font-size: 80px;
  ${props =>
    props.radio === `radio` &&
    css`
      font-size: 40px;
      padding-bottom: 75px;
    `}
`
