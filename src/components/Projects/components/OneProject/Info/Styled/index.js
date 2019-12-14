import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled(Link)`
  position: absolute;
  display: grid;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
  background: rgba(16, 16, 16, 0.3);
  top: 0;
  padding-top: 56.25%;
  width: 100%;
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
`
export const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const Item = styled.li`
  font-size: 20px;
  text-transform: none;
  font-weight: normal;
  margin-top: 20%;
  color: white;
  margin: 0;
`
