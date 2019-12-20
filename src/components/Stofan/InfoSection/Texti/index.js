import React from "react"
import { TextContainer, Content } from "./Styled"
import "./index.css"

/** components */
import { Title } from "../../../../constants/components"

const Texti = ({ title, texti }) => {
  return (
    <TextContainer>
      <Title title={title}></Title>
      <Content
        className="about-content"
        dangerouslySetInnerHTML={{ __html: texti }}
      ></Content>
    </TextContainer>
  )
}

export default Texti
