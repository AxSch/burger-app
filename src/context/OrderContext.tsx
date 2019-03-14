import React from 'react'
import { IBurgerIngredients, IAddRem } from 'containers/BurgerBuilder/BurgerBuilder'
import { ingredientsObj } from '../utils/constants';

interface IOrderContext {
  setIngredients: IAddRem
  isDisabled: IBurgerIngredients | null
  totalPrice: number
  isPurchasable: boolean
  showModal: Function
}

const OrderContext = React.createContext<IOrderContext>({
  setIngredients: {
    sub: Function,
    add: Function,
  },
  isDisabled: ingredientsObj,
  totalPrice: 0,
  isPurchasable: false,
  showModal: () => { }
})

export default OrderContext
