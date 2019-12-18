import React from "react"
import { ImageContainer, Image, CarouselContainer } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

/** the slick boy */
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/** frontpage carousel */
const Carousel = ({
  data: {
    allMarkdownRemark: { nodes: verkefni },
  },
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
  }
  return (
    <CarouselContainer>
      <Slider {...settings}>
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
      </Slider>
    </CarouselContainer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { aforsidu: { eq: true } }
            fileAbsolutePath: { regex: "/static/content/verkefni/" }
          }
        ) {
          nodes {
            frontmatter {
              title
              forsidumynd {
                publicURL
                childImageSharp {
                  fluid(quality: 80, maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Carousel data={data} {...props}></Carousel>}
  ></StaticQuery>
)
