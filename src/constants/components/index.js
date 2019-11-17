import styled, { css } from "styled-components"
import React from "react"

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
  z-index: 2;
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
