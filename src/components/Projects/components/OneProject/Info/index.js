import React from "react"
import { Container, List, Item } from "./Styled"
import slugify from "slugify"

const Info = ({ project: { kunni, title } }) => {
  return (
    <Container to={"/verk/" + slugify(title, { lower: true })}>
      <List>
        <Item>{kunni}</Item>
        <Item>{title}</Item>
      </List>
    </Container>
  )
}

export default Info
