import React from "react"
import { List, Item, Title } from "./Styled"

const Hlutverk = ({ hvad_var_gert, device }) => {
  return (
    <List device={device}>
      <Title>Hvað var gert?</Title>
      {hvad_var_gert.map((hlutverk, index) => (
        <Item key={index}>{hlutverk}</Item>
      ))}
    </List>
  )
}

export default Hlutverk
