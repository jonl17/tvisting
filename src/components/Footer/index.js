import React from "react"
import { Container } from "./Styled"
import Logo from "./components/Logo"
import Contact from "./components/Contact"
import { connect } from "react-redux"

const Footer = ({ device }) => {
  return (
    <Container device={device}>
      <Logo></Logo>
      <Contact type={"address"}></Contact>
      <Contact type={"contact"}></Contact>
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Footer)
