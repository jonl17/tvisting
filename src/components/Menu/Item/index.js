import React from "react"
import { Anchor, Container } from "./Styled"
import { useDispatch } from "react-redux"
import { burgerMenuOpen } from "../../../state/action"

const Item = ({ item: { name, to } }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      {/* closed menu when transitioning to another page */}
      <Anchor
        onClick={() => dispatch(burgerMenuOpen(false))}
        className="bold"
        to={to}
        radio={name === `Radíó` ? "radio" : ""}
      >
        {name}
      </Anchor>
    </Container>
  )
}

export default Item
