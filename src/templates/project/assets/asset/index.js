import React from "react"
import { ImageContainer, Image, Video, Play } from "./Styled"

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
    const { asset, mutant } = this.props
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
            controls={false}
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

export default Asset
