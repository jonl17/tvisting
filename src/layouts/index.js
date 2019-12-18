import React from "react"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Menu from "../components/Menu"

class Wrap extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Burger></Burger>
        <Menu></Menu>
        {/** body of the website below */}
        {this.props.children}
        {/** body of the website above */}
        <Footer></Footer>
      </>
    )
  }
}

export default Wrap
