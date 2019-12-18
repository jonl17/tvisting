import React from "react"
import { CarouselContainer, ImageContainer, Image } from "./Styled"

/** frontpage carousel */
const Carousel = ({ verkefni }) => {
  return (
    <CarouselContainer>
      {verkefni.map(verk =>
        verk.frontmatter.forsidumynd.childImageSharp ? (
          <ImageContainer>
            <Image
              fluid={verk.frontmatter.forsidumynd.childImageSharp.fluid}
            ></Image>
          </ImageContainer>
        ) : (
          ""
        )
      )}
    </CarouselContainer>
  )
}

export default Carousel
