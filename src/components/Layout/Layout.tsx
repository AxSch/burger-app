import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideBar from '../../components/Navigation/SideDrawer/SideDrawer';
import SideBarContext from '../../context/SideBarContext';

const StyledLayout = styled.div`
  width: 100%;
  margin-top: 72px;
  height: 100%;
  overflow: scroll;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;
`

const Layout:FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const context = {
    isVisible: isVisible,
    setIsVisible: setIsVisible
  }

  return (
    <>
      <SideBarContext.Provider value={context}>
        <ToolBar />
        <SideBar />
      </SideBarContext.Provider>
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  )
}

export default Layout
