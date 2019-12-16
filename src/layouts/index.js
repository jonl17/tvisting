import React from "react"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import PageContainer from "../components/PageContainer"
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
        <PageContainer>
          {/** body of the website below */}
          {this.props.children}
          {/** body of the website above */}
        </PageContainer>
        <Footer></Footer>
      </>
    )
  }
}

export default Wrap
