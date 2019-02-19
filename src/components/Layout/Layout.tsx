import React from 'react'

const layout = (props: any) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <div>
      {props.children}
    </div>
  </>
)

export default layout
