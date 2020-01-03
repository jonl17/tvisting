import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import {
  StarfsfolkContainer,
  StaffCell,
  Image,
  Nafn,
  Info,
  Job,
} from "./Styled"
import { Title } from "../../../constants/components"

const Starfsfolk = ({
  data: {
    allMarkdownRemark: { nodes: staff },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  console.log(staff)
  return (
    <>
      <Title line padding={"50px"} title="Starfsfólk"></Title>
      <StarfsfolkContainer device={device}>
        {staff.map((item, index) => (
          <StaffCell key={index}>
            <Image src={item.frontmatter.mynd.publicURL}></Image>
            <Nafn className="bold">{item.frontmatter.title}</Nafn>
            <Info>
              <Job>{item.frontmatter.starf}</Job>
            </Info>
          </StaffCell>
        ))}
      </StarfsfolkContainer>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/content/starfsmenn/" } }
        ) {
          nodes {
            frontmatter {
              title
              mynd {
                publicURL
              }
              starf
              netfang
            }
          }
        }
      }
    `}
    render={data => <Starfsfolk data={data} {...props}></Starfsfolk>}
  ></StaticQuery>
)
