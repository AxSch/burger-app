import React from 'react'
import styles from './Layout.module.scss'

const layout = (props: any) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <div className={styles['layout-inner']}>
      {props.children}
    </div>
  </>
)

export default layout
