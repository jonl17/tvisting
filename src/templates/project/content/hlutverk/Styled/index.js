import styled from "styled-components"
import { COLORS } from "../../../../../constants"
import { css } from "styled-components"

export const List = styled.ul`
  grid-area: hlutverk;
  margin: 0 auto 0 auto;
  ${props =>
    props.device === `mobile` &&
    css`
      margin: 0;
    `}
  padding: 0;
`
export const Item = styled.p`
  margin: 0;
  color: ${COLORS.red};
`
export const Title = styled.h3``
