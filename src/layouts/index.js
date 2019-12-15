import React from "react"
import { Container } from "./Styled"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"

class Wrap extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Burger></Burger>
        {/** body of the website below */}
        {this.props.children}
        {/** body of the website above */}
        <Footer></Footer>
      </Container>
    )
  }
}

export default Wrap
