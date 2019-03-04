import React from 'react'
import styled from 'styled-components'

const StyledToolBar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-colour: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`

const StyledToolBarNav = styled.nav`
  height: 100%;
`

const ToolBar: React.FunctionComponent<{}> = () => {
  return (
    <StyledToolBar>
    <div>THE CHUMBUCKET</div>
    <div>MENU</div>
      <StyledToolBarNav>
        ...
      </StyledToolBarNav>
    </StyledToolBar>
  )
}

export default ToolBar
