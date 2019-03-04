import React from 'react'
import  styled from 'styled-components'

const StyledNavItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
`

const StyledItemLink = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;

  :hover {

  }
  :active {
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;
  }
`



const NavItem: React.FunctionComponent = () => {
  return (
    <>
      <StyledNavItem>
        <StyledItemLink href="/"></StyledItemLink>
      </StyledNavItem>
    </> 
  )
}

export default NavItem
