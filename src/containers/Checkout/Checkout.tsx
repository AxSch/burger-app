import React from 'react'
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'
import { RouteComponentProps } from 'react-router-dom'


interface ICheckoutState {
  ingredients: IBurgerIngredients
}

class Checkout extends React.Component<{} & RouteComponentProps,ICheckoutState> {
  constructor(props){
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
    }
  }
  private cancelCheckout = () => {
    const { history } = this.props
    history.goBack()
  }
  
  private continueCheckout = () => {
    const { history } = this.props
    history.push("/checkout")
  }

  public render() {
    const { ingredients } = this.state
    return (
      <div>
        <CheckoutSummary 
          ingredients={ingredients} 
          continueCheckout={this.continueCheckout}
          cancelCheckout={this.cancelCheckout}
        />
      </div>
    )
  }
}

export default Checkout
