import React from 'react'
import { NavLink } from "react-router-dom";
import  styled from 'styled-components'

const StyledNavItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media(min-width: 500px) {
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
  }
`

const StyledItemLink = styled(NavLink)`
  color: #8F5C2C;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  :hover,
  :active,
  &.active {
    color: #40A4C8;
  }

  @media(min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    :hover,
    :active,
    &.active {
      background-color: #8F5C2C;
      border-bottom: 4px solid #40A4C8;
      color: white;
    }
  }
`

interface INavItem {
  link: string
  children: string
}

const NavItem: React.FunctionComponent<INavItem> = ({ link, children }) => {
  return (
    <>
      <StyledNavItem>
        <StyledItemLink exact to={link}>{children}</StyledItemLink>
      </StyledNavItem>
    </> 
  )
}

export default NavItem
