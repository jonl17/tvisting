import React from "react"
import { useSelector } from "react-redux"

/** components */
import Projects from "../components/Projects"
import { VerticalTitle } from "../constants/components"

const Verkin = () => {
  const device = useSelector(state => state.reducer.device)
  return (
    <>
      {device !== undefined ? (
        <>
          <VerticalTitle device={device} title={"Verkin"}></VerticalTitle>
          <Projects></Projects>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Verkin
