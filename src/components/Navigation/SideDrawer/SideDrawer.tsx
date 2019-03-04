import React from 'react'
import styled from 'styled-components'
import NavItems from '../NavItems/NavItems'
import Backdrop from '../../../components/UI/Backdrop/Backdrop'
import SideBarContext from '../../../context/SideBarContext';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%
  top: 0 
  left: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media(min-width: 500px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }
`

interface ISideDrawer {

}

const SideDrawer: React.FunctionComponent<ISideDrawer> = () => {
  const context = React.useContext(SideBarContext)
  return (
    <>
      <Backdrop isVisible={context.isVisible} clicked={() => context.setIsVisible(!context.isVisible)} />
      <StyledSideDrawer className={context.isVisible ? "open" : "close"}>
        <nav>
          <NavItems />
        </nav>
      </StyledSideDrawer>
    </>
  )
}

export default SideDrawer
