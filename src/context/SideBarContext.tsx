import React from 'react'
import { IBurgerIngredients, IAddRemHandlers } from 'containers/BurgerBuilder/BurgerBuilder'
import { ingredientsObj } from '../utils/constants';

interface ISideBarContext {
  isVisible: boolean
  setIsVisible: Function
}

const SideBarContext = React.createContext<ISideBarContext>({
  setIsVisible: Function,
  isVisible: false
})

export default SideBarContext