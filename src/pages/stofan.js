import React from "react"

/** components */
import PageContainer from "../components/PageContainer"
import InfoSection from "../components/Stofan/InfoSection"
import Kunnar from "../components/Stofan/Kunnar"
import Starfsfolk from "../components/Stofan/Starfsfolk"

const Stofan = () => {
  return (
    <PageContainer>
      <InfoSection></InfoSection>
      <Kunnar></Kunnar>
      <Starfsfolk></Starfsfolk>
      {/* google maps */}
    </PageContainer>
  )
}

export default Stofan
