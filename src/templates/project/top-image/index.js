import React from "react"
import { ImageContainer, MobileContainer } from "./Styled"
import { useSelector } from "react-redux"

const TopImage = ({ mynd }) => {
  const device = useSelector(state => state.reducer.device)
  return device === `browser` ? (
    <ImageContainer fluid={mynd.childImageSharp.fluid}></ImageContainer>
  ) : (
    <MobileContainer fluid={mynd.childImageSharp.fluid}></MobileContainer>
  )
}

export default TopImage
