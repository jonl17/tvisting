import styled, { css } from "styled-components"

const KunnarContainerStyle = css`
  display: grid;
  padding-top: 75px;
`
export const KunnarContainer = styled.div`
  ${KunnarContainerStyle};
  ${props =>
    props.device === `browser` &&
    css`
      grid-template-columns: repeat(5, auto);
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      grid-template-columns: repeat(3, auto);
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: repeat(1, auto);
    `}
`
export const KunniBox = styled.div`
  height: 200px;
  width: 100%;
  text-align: center;
`
export const Image = styled.img`
  max-height: 100px;
  max-width: 150px;
  height: 100%;
  transition: 0.3s ease-in-out;
  opacity: 0.8;
  vertical-align: middle;
  filter: grayscale(100%);
  &&:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`
