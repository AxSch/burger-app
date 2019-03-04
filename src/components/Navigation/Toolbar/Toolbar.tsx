import React, { useContext } from 'react'
import styled from 'styled-components'
import NavItems from '../NavItems/NavItems';
import SideBarContext from '../../../context/SideBarContext';

const StyledToolBar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`

const StyledToolBarNav = styled.nav`
  height: 100%;
  @media(max-width: 499px){
    display: none;
  }
`

const ToolBar: React.FunctionComponent<{}> = () => {
  const context = useContext(SideBarContext)
  return (
    <StyledToolBar>
    <div>THE CHUMBUCKET</div>
    <div onClick={() => context.setIsVisible(!context.isVisible)}>MENU</div>
      <StyledToolBarNav>
        <NavItems />
      </StyledToolBarNav>
    </StyledToolBar>
  )
}

export default ToolBar
