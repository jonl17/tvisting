import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import { setDevice } from "../state/action"
import Footer from "../components/Footer"
import { PageContainer } from "../constants/components"

class Wrap extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  render() {
    return (
      <Container>
        <PageContainer>{this.props.children}</PageContainer>
        <Footer></Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Wrap)
