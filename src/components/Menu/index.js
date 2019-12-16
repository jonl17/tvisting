import React from "react"
import { Container, Logo, LogoAnchor } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { burgerMenuOpen } from "../../state/action"
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
  const dispatch = useDispatch()
  return (
    <Container open={burgerMenuOpen ? "open" : ""}>
      <LogoAnchor onClick={() => dispatch(burgerMenuOpen(false))} to={"/"}>
        <Logo></Logo>
      </LogoAnchor>
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
