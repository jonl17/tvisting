import styled, { css } from "styled-components"
import { COLORS } from "../../../../constants"

export const StarfsfolkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3333%);
  /** mobile */
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: repeat(2, 50%);
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
export const Nafn = styled.p`
  margin: 0;
  color: ${COLORS.black};
  font-size: 20px;
  text-transform: uppercase;
`
export const Info = styled.div``
export const Job = styled.p``
