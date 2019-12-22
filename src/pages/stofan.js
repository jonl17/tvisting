import React from "react"
import { graphql } from "gatsby"

/** components */
import PageContainer from "../components/PageContainer"
import InfoSection from "../components/Stofan/InfoSection"
import Kunnar from "../components/Stofan/Kunnar"

const Stofan = () => {
  return (
    <PageContainer>
      <InfoSection></InfoSection>
      <Kunnar></Kunnar>
      {/* staff */}
      {/* google maps */}
    </PageContainer>
  )
}

export default Stofan
