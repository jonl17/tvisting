import React from "react"
import {
  ImageContainer,
  Image,
  CarouselContainer,
  Gif,
  VideoContainer,
  Video,
  Anchor,
} from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { generateVerkefniSlug } from "../../methods"

/** the slick boy */
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/** frontpage carousel */
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carouselRef = React.createRef()
  }
  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (this.carouselRef.current != null) {
        if (e.keyCode === 37) {
          this.previous()
        }
        if (e.keyCode === 39) {
          this.next()
        }
      }
    })
  }
  next() {
    this.carouselRef.current.slickNext()
  }
  previous() {
    this.carouselRef.current.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      accessibility: true,
      pauseOnFocus: true,
      autoplaySpeed: 4500,
    }
    const {
      data: {
        allMarkdownRemark: { nodes: verkefni },
      },
    } = this.props
    return (
      <CarouselContainer>
        <Slider ref={this.carouselRef} {...settings}>
          {verkefni.map((verk, index) =>
            verk.frontmatter.forsidumynd.skra.childImageSharp ? (
              <ImageContainer key={index}>
                <Anchor to={generateVerkefniSlug(verk.frontmatter.title)}>
                  <Image
                    fluid={
                      verk.frontmatter.forsidumynd.skra.childImageSharp.fluid
                    }
                  ></Image>
                </Anchor>
              </ImageContainer>
            ) : verk.frontmatter.forsidumynd.skra.publicURL.includes(".gif") ? (
              <ImageContainer key={index}>
                <Anchor to={generateVerkefniSlug(verk.frontmatter.title)}>
                  <Gif src={verk.frontmatter.forsidumynd.skra.publicURL}></Gif>
                </Anchor>
              </ImageContainer>
            ) : (
              <VideoContainer key={index}>
                <Anchor to={generateVerkefniSlug(verk.frontmatter.title)}>
                  <Video autoPlay muted playsInline loop>
                    <source
                      type="video/mp4"
                      src={verk.frontmatter.forsidumynd.skra.publicURL}
                    ></source>
                  </Video>
                </Anchor>
              </VideoContainer>
            )
          )}
        </Slider>
      </CarouselContainer>
    )
  }
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
                skra {
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
      }
    `}
    render={data => <Carousel data={data} {...props}></Carousel>}
  ></StaticQuery>
)
