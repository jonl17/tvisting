import styled from "styled-components"
import React from "react"

export const PageContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 75px;
  min-height: 100vh;
`

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
`

export const VerticalTitle = ({ title }) => <VerticalText>{title}</VerticalText>
