import React from "react"
import { Container } from "./Styled"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

/** components */
import Item from "./Item"

const Menu = ({
  data: {
    site: {
      siteMetadata: { menuitems },
    },
  },
}) => {
  const burgerMenuOpen = useSelector(state => state.reducer.burgerMenuOpen)
  return (
    <Container open={burgerMenuOpen ? "open" : ""}>
      {menuitems.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuitems {
              name
              to
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props}></Menu>}
  ></StaticQuery>
)
