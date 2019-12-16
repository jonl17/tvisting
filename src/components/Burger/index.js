import React from "react"
import { Container, Line } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { openBurgerMenu } from "../../state/action"

const dispatches = (dispatch, state) => {
  if (state) {
    dispatch(openBurgerMenu(false))
  } else {
    dispatch(openBurgerMenu(true))
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
