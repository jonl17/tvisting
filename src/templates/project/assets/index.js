import React from "react"
import { Grid } from "./Styled"
import { useSelector } from "react-redux"

/** components */
import Asset from "./asset"

const Assets = ({ assets }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Grid device={device}>
      {assets.map((asset, index) => (
        <Asset
          mutant={index % 3 === 0 && device !== `mobile`}
          key={index}
          asset={asset.hlutur}
        ></Asset>
      ))}
    </Grid>
  )
}

export default Assets
