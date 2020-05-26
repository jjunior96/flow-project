import styled from 'styled-components'
import { Link } from 'gatsby'

export const Menu = styled.aside`
  background-color: #ccc;
  height: 100vh;
  border-left: 1px solid #b3b2b2;
  width: 3.79rem;
  float: right;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 3.79rem;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }
`
export const MenuGroup = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    margin: 0;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
  }
`

export const MenuItemLink = styled(Link)`
  color: #555555;

  & + a {
    margin-top: 1rem;
    @media screen and (max-width: 800px) {
      margin: 0;
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 800px) {
    margin: 0;
    margin-right: 1rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.5s ease 0s;
    &:hover {
      color: #1fa1f2;
    }
  }
`
