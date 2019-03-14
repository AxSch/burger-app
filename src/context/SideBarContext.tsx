import React from 'react'

interface ISideBarContext {
  isVisible: boolean
  setIsVisible: Function
}

const SideBarContext = React.createContext<ISideBarContext>({
  setIsVisible: Function,
  isVisible: false
})

export default SideBarContext