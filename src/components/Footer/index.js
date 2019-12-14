import React from "react"
import { useSelector } from "react-redux"

import { Container } from "./Styled"

/** components */
import Logo from "./components/Logo"
import Contact from "./components/Contact"

const Footer = () => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      <Logo></Logo>
      <Contact type={"address"}></Contact>
      <Contact type={"contact"}></Contact>
    </Container>
  )
}

export default Footer
