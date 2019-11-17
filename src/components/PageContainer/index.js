import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"

const PageContainer = ({ children, device }) => {
  return <Container device={device}>{children}</Container>
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(PageContainer)
