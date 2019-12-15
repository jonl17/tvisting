import styled, { css, keyframes } from "styled-components"
import { COLORS } from "../../../constants"

const Breathe = keyframes`
  from {
    width: 50%;
  }
  to {
    width: 40%;
  }
`

export const Container = styled.div`
  height: 75px;
  width: 75px;
  margin: 0;
  position: fixed;
  top: 0;
  right: -15px;
  padding: 0 15px;
  display: grid;
  z-index: 8;
  &&:hover {
    cursor: pointer;
  }
`
const LineStyle = css`
  background: ${COLORS.red};
  height: 3px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  animation: ${Breathe} 1.5s ease-in-out 0s infinite alternate;
`
export const Line = styled.span`
  ${LineStyle};
  ${props =>
    props.one &&
    css`
      margin: auto auto 3px auto;
      ${props =>
        props.ex &&
        css`
          background: white;
          transform: rotate(225deg);
          margin-bottom: -1.5px;
        `}
    `}
  ${props =>
    props.two &&
    css`
      margin-bottom: auto;
      margin-top: 2px;
      ${props =>
        props.ex &&
        css`
          background: white;
          transform: rotate(-45deg);
          margin-top: -1.5px;
        `}
    `}
`
