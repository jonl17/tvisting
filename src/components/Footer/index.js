import React from "react"
import { Container } from "./Styled"
import Logo from "./components/Logo"
import Contact from "./components/Contact"

const Footer = () => {
  return (
    <Container>
      <Logo></Logo>
      <Contact type={"address"}></Contact>
      <Contact type={"contact"}></Contact>
    </Container>
  )
}

export default Footer
