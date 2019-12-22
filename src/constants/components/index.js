import styled, { css } from "styled-components"
import React from "react"
import { LAYERS } from "../../constants"

const VerticalText = styled.h1`
  position: fixed;
  top: 80%;
  left: 15px;
  background: transparent;
  padding: 5px 10px;
  margin: 0 0 10px 0;
  text-align: right;
  width: 400px;
  font-size: 25px;
  z-index: ${LAYERS.verticalText};
  text-transform: uppercase;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  ${props =>
    props.device === `mobile` &&
    css`
      display: none;
    `}
`

export const VerticalTitle = ({ title, device }) => (
  <VerticalText device={device}>{title}</VerticalText>
)

const Text = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  margin-left: ${props => props.padding};
  margin-right: ${props => props.padding};
  ${props =>
    props.line === "line" &&
    css`
      border-top: 2.5px solid;
      padding-top: 25px;
    `}
`
export const Title = ({ title, device, padding, line }) => (
  <Text line={line ? "line" : ""} padding={padding} device={device}>
    {title}
  </Text>
)
