import React from 'react'
import  styled from 'styled-components'
import NavItem from './NavItem/NavItem';

const StyledNavItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`

const NavItems: React.FunctionComponent = () => {
  return (
    <StyledNavItems>
      <NavItem />
    </StyledNavItems>
  )
}

export default NavItems
