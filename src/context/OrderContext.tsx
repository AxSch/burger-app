import React from 'react'
import { IBurgerIngredients, IAddRemHandlers } from 'containers/BurgerBuilder/BurgerBuilder'
import { ingredientsObj } from '../utils/constants';

interface IOrderContext {
  setIngredients: IAddRemHandlers
  isDisabled: IBurgerIngredients
  totalPrice: number
  isPurchasable: boolean
  showModal: Function
}

const OrderContext = React.createContext<IOrderContext>({
  setIngredients: {
    subHandler: Function,
    addHandler: Function,
  },
  isDisabled: ingredientsObj,
  totalPrice: 0,
  isPurchasable: false,
  showModal: () => { }
})

export default OrderContext
