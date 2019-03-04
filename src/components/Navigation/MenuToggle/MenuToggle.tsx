import React, { FunctionComponent } from 'react'
import SideBarContext from '../../../context/SideBarContext'
import styled from 'styled-components'

const StyledToggle = styled.h1`
  @media(min-width: 500px) {
    display: none
  }
`

const MenuToggle:FunctionComponent = () => {
  const context = React.useContext(SideBarContext)
  return (
    <>
      <StyledToggle onClick={() => context.setIsVisible(!context.isVisible)}>Menu</StyledToggle>
    </>
  )
}

export default MenuToggle
