import React, { FunctionComponent } from 'react'
import SideBarContext from '../../../context/SideBarContext'
import styled from 'styled-components'

const StyledToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  
  @media(min-width: 500px) {
    display: none
  }
`

const StyledToggleIcon = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`

const MenuToggle:FunctionComponent = () => {
  const context = React.useContext(SideBarContext)
  return (
    <>
      <StyledToggle onClick={() => context.setIsVisible(!context.isVisible)}>
        <StyledToggleIcon></StyledToggleIcon>
        <StyledToggleIcon></StyledToggleIcon>
        <StyledToggleIcon></StyledToggleIcon>
      </StyledToggle>
    </>
  )
}

export default MenuToggle
