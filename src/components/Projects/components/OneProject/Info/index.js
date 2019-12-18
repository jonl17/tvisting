import React from "react"
import { Container, List, Item } from "./Styled"
import slugify from "slugify"
import { useSelector } from "react-redux"

const Info = ({ project: { kunni, title } }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device} to={"/verk/" + slugify(title, { lower: true })}>
      <List>
        <Item>{kunni}</Item>
        <Item titill className="bold upper">
          {title}
        </Item>
      </List>
    </Container>
  )
}

export default Info
