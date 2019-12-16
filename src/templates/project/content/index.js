import React from "react"
import { Container } from "./Styled"

/** components */
import { Title } from "../../../constants/components"

const Content = ({ title }) => {
  return (
    <Container>
      <Title title={title}></Title>
    </Container>
  )
}

export default Content
