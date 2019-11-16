import React from "react"
import { Block, Item, Mail } from "./Styled"
import { useSiteMetadata } from "../../../../hooks"

const Contact = ({ type }) => {
  const { contact, address } = useSiteMetadata()
  return type === `contact` ? (
    <Block>
      <Mail href={"mailto:" + contact.mail}>
        <Item>{contact.mail}</Item>
      </Mail>
      <Item>{contact.phone}</Item>
    </Block>
  ) : (
    <Block>
      <Item>{address.address}</Item>
      <Item>{address.code}</Item>
    </Block>
  )
}

export default Contact
