import React from "react"
import { Container, Line } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { burgerMenuOpen } from "../../state/action"

const dispatches = (dispatch, state) => {
  if (state) {
    dispatch(burgerMenuOpen(false))
  } else {
    dispatch(burgerMenuOpen(true))
  }
}

const Burger = () => {
  const burgerMenuOpen = useSelector(state => state.reducer.burgerMenuOpen)
  const dispatch = useDispatch()
  return (
    <Container onClick={() => dispatches(dispatch, burgerMenuOpen)}>
      <Line form={burgerMenuOpen ? "ex" : ""} one></Line>
      <Line form={burgerMenuOpen ? "ex" : ""} two></Line>
    </Container>
  )
}

export default Burger
