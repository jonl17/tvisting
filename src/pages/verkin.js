import React from "react"
import { useSelector } from "react-redux"

/** components */
import PageContainer from "../components/PageContainer"
import Projects from "../components/Projects"
import { VerticalTitle } from "../constants/components"

const Verkin = () => {
  const device = useSelector(state => state.reducer.device)
  return (
    <PageContainer>
      {device !== undefined ? (
        <>
          <VerticalTitle device={device} title={"Verkin"}></VerticalTitle>
          <Projects></Projects>
        </>
      ) : (
        <></>
      )}
    </PageContainer>
  )
}

export default Verkin
