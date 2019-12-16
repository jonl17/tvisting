import React from "react"
import { Container } from "./Styled"
import { useSelector } from "react-redux"

/** components */
import { Title } from "../../../constants/components"
import About from "./about"
import Hlutverk from "./hlutverk"

const Content = ({ title, about, hvad_var_gert }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      <Title title={title}></Title>
      <About about={about}></About>
      <Hlutverk device={device} hvad_var_gert={hvad_var_gert}></Hlutverk>
      {/* images, gifs or video assets */}
    </Container>
  )
}

export default Content
