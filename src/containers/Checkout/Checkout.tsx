import React from 'react'
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'
import { RouteComponentProps, Route } from 'react-router-dom'
import * as queryString from 'query-string'
import ContactData from '../../containers/Checkout/ContactData/ContactData';


interface ICheckoutState {
  ingredients: IBurgerIngredients
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
    }
  }

  componentDidMount() {
    const { location } = this.props
    let ingrdObj = {} as IBurgerIngredients

    const query = location.search
    const params = queryString.parse(query)
    for (const ingrd in params) {
      ingrdObj[ingrd] = params[ingrd]
    }

    this.setState(() => {
      return {
        ingredients: ingrdObj
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
    const { ingredients } = this.state
    const { match } = this.props
    console.log(match.url)
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          continueCheckout={this.continueCheckout}
          cancelCheckout={this.cancelCheckout}
        />
        <Route path={match.url + '/contact-data'} component={ContactData} />
      </div>
      )
    }
  }
  
  export default Checkout
