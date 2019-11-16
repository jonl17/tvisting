import React from "react"
import { Container } from "./Styled"
import Footer from "../components/Footer"
import { PageContainer } from "../constants/components"

class Wrap extends React.Component {
  render() {
    return (
      <Container>
        <PageContainer>{this.props.children}</PageContainer>
        <Footer></Footer>
      </Container>
    )
  }
}

export default Wrap
