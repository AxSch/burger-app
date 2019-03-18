import React from 'react'
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'
import { RouteComponentProps, Route } from 'react-router-dom'
import * as queryString from 'query-string'
import ContactData from '../../containers/Checkout/ContactData/ContactData';


interface ICheckoutState {
  ingredients: IBurgerIngredients
  totalPrice: number
}

class Checkout extends React.Component<{} & RouteComponentProps, ICheckoutState> {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
      totalPrice: 0
    }
  }

  componentWillMount() {
    const { location } = this.props
    let ingrdObj = {} as IBurgerIngredients
    let totalPrice = 0

    const query = location.search
    const params = queryString.parse(query)
    for (const ingrd in params) {
      if(ingrd === 'price') {
        totalPrice = Number(params[ingrd])
      } else {
        ingrdObj[ingrd] = params[ingrd]
      }
    }

    this.setState(() => {
      return {
        ingredients: ingrdObj,
        totalPrice: totalPrice
      }
    })
  }

  private cancelCheckout = () => {
    const { history } = this.props
    history.goBack()
  }

  private continueCheckout = () => {
    const { history, match } = this.props
    history.push(match.url + "/contact-data")
  }

  public render() {
    const { ingredients, totalPrice } = this.state
    const { match } = this.props
    // console.log(ingredients)
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          continueCheckout={this.continueCheckout}
          cancelCheckout={this.cancelCheckout}
        />
        <Route path={match.url + '/contact-data'} render={() => (<ContactData totalPrice={totalPrice} ingredients={ingredients} />)} />
      </div>
      )
    }
  }
  
  export default Checkout
