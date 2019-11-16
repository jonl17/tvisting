import styled from "styled-components"

export const Container = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(230, 80, 100);
  display: grid;
  grid-template-columns: repeat(3, 15%) auto 30%;
  grid-template-areas: "logo address mail-phone ... social-links";
`
