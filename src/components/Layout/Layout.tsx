import React from 'react'

const layout = (props: any) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.childen}
    </main>
  </>
)

export default layout
