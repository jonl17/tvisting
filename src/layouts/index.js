import React from "react"
import { Container } from "./Styled"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/GlobalStyle"

class Wrap extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        {/** body of the website below */}
        {this.props.children}
        {/** body of the website above */}
        <Footer></Footer>
      </Container>
    )
  }
}

export default Wrap
