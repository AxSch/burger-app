import React from 'react'
import styled from 'styled-components'
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideBar from '../../components/Navigation/SideDrawer/SideDrawer';

const StyledLayout = styled.div`
  width: 100%;
  margin-top: 72px;
  height: 100%;
  overflow: scroll;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;
`

const layout = (props: any) => (
  <>
    <ToolBar />
    <SideBar />
    <StyledLayout>
      {props.children}
    </StyledLayout>
  </>
)

export default layout
