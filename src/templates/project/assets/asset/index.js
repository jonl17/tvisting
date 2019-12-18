import React from "react"
import { ImageContainer, Image, Video, Play } from "./Styled"
import { connect } from "react-redux"

/** temp poster for videos, delete later */
import Poster from "../../../../../static/myndir/poster.png"

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
    const { asset, mutant, device } = this.props
    if (asset.childImageSharp) {
      const { fluid } = asset.childImageSharp
      return (
        <ImageContainer mutant={mutant ? "mutant" : ""}>
          <Image fluid={fluid}></Image>
        </ImageContainer>
      )
    } else {
      const { publicURL } = asset
      return (
        <ImageContainer mutant={mutant ? "mutant" : ""}>
          <Video
            poster={Poster}
            playsInline
            onClick={() => this.paly()}
            ref={this.videoRef}
          >
            <source src={publicURL}></source>
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
