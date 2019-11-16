import React from "react"
import { Container } from "./Styled"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { PageContainer } from "../constants/components"

class Wrap extends React.Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <PageContainer>{this.props.children}</PageContainer>
        <Footer></Footer>
      </Container>
    )
  }
}

export default Wrap
