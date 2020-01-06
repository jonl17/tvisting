import styled, { css } from "styled-components"
import { COLORS } from "../../../../constants"

export const StarfsfolkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3333%);
  /** tablet */
  ${props =>
    props.device === `tablet` &&
    css`
      grid-template-columns: repeat(2, 50%);
    `}
  /** tablet */
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`
export const StaffCell = styled.div`
  position: relative;
  padding: 25px 5px 25px 5px;
  margin: auto;
  text-align: center;
`
export const Image = styled.img`
  height: 100px;
  padding-bottom: 10px;
`

export const Info = styled.div``
/** shared paragraph styling for info text */
export const InfoTextStyle = css`
  margin: 0;
  color: ${COLORS.black};
  text-transform: uppercase;
`
export const Nafn = styled.p`
  ${InfoTextStyle};
  font-size: 28px;
  max-width: 250px;
  margin: 0 auto;
`
export const Job = styled.p`
  ${InfoTextStyle};
  font-size: 20px;
`
export const Mail = styled.a`
  ${InfoTextStyle};
  font-size: 17px;
  text-decoration: none;
`
