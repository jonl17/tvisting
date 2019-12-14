import React from "react"
import { BoxLogo, GoHome } from "./Styled"

const Header = () => {
  return (
    <>
      <GoHome to={"/"}>
        <BoxLogo></BoxLogo>
      </GoHome>
    </>
  )
}

export default Header
