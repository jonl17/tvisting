import React from "react"
import { ImageContainer, Image, Video, Play } from "./Styled"
import { connect } from "react-redux"

/** video components are always class components! */
class Asset extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
    this.state = {
      videoOn: false,
    }
  }
  paly() {
    if (!this.state.videoOn) {
      this.videoRef.current.play()
      this.setState({
        videoOn: true,
      })
    } else {
      this.videoRef.current.pause()
      this.setState({
        videoOn: false,
      })
    }
  }
  render() {
    const {
      asset: { skra, thumb },
      mutant,
    } = this.props
    if (skra.childImageSharp) {
      const { fluid } = skra.childImageSharp
      return (
        <ImageContainer mutant={mutant ? "mutant" : ""}>
          <Image fluid={fluid}></Image>
        </ImageContainer>
      )
    } else {
      return (
        <ImageContainer mutant={mutant ? "mutant" : ""}>
          <Video
            poster={thumb.publicURL}
            playsInline
            onClick={() => this.paly()}
            ref={this.videoRef}
          >
            <source src={skra.publicURL}></source>
          </Video>
          <Play
            display={this.state.videoOn ? "hide" : "show"}
            onClick={() => this.paly()}
          ></Play>
        </ImageContainer>
      )
    }
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Asset)
