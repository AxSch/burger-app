import React from 'react'
import { IBurgerIngredients, IAddRemHandlers } from 'containers/BurgerBuilder/BurgerBuilder'
import { ingredientsObj } from 'utils/constants';

interface IOrderContext {
  ingredients: IBurgerIngredients
  setIngredients: IAddRemHandlers
  isDisabled: IBurgerIngredients
  totalPrice: number
  isPurchasable: boolean
  isVisible: boolean
  showModal: Function
}

const OrderContext = React.createContext<IOrderContext>({
  ingredients: ingredientsObj,
  setIngredients: {
    subHandler: Function,
    addHandler: Function,
  },
  isDisabled: ingredientsObj,
  totalPrice: 0,
  isPurchasable: false,
  isVisible: false,
  showModal: () => { }
})

export default OrderContext
