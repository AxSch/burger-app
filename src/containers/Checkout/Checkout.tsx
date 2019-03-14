import React from 'react'
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'


interface ICheckoutState {
  ingredients: IBurgerIngredients
}

class Checkout extends React.Component<{},ICheckoutState> {
  constructor(props){
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      }
    }
  }
  public render() {
    const { ingredients } = this.state
    return (
      <div>
        <CheckoutSummary ingredients={ingredients} onClick={()=>{}} />
      </div>
    )
  }
}

export default Checkout
