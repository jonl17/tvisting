import React from "react"
import { ImageContainer, Image } from "./Styled"

const TopImage = ({ mynd }) => {
  return (
    <ImageContainer>
      <Image fluid={mynd.childImageSharp.fluid}></Image>
    </ImageContainer>
  )
}

export default TopImage
