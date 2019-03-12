import React from 'react'
import Burger, { StyledBurger } from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import styled from 'styled-components'
import { ingredientsObj, pricesObj } from '../../utils/constants'
import OrderContext from '../../context/OrderContext'
import OrdersClient from '../../http/OrdersClient'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../components/hoc/withErrorHandler'
import * as moment from 'moment'


export const StyledSummary = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%; 
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

export interface IBurgerIngredients {
  salad: number | boolean,
  bacon: number | boolean,
  cheese: number | boolean,
  meat: number | boolean,
}

export interface IIPriceState {
  price: IBurgerIngredients
  setPrices: Function
}

interface IBurgerBuilderState {
  ingredients: null | IBurgerIngredients
  prices: IBurgerIngredients
  totalPrice: number
  isPurchasable: boolean
  isVisible: boolean
  isLoading: boolean
  error: boolean
}

export interface IAddRemHandlers {
  subHandler: Function
  addHandler: Function
}


class BurgerBuilder extends React.Component<{}, IBurgerBuilderState> {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: null,
      prices: pricesObj,
      totalPrice: 0.20,
      isPurchasable: false,
      isVisible: false,
      isLoading: false,
      error: false
    }
  }

  public componentDidMount() {
    OrdersClient.get('/ingredients') // using a Firebase endpoint
      .then(res => {
        this.setState((prevState) => {
          return {
            ingredients: res && res.data,
          }
        })
      })
      .catch(error => {
        this.setState(() => {
          return {
            error: true
          }
        })
      })
  }

  private updatePurchase = (ingredients: IBurgerIngredients) => {
    const sum = Object.keys(ingredients).map(ingrnt => {
      return ingredients[ingrnt]
    }).reduce((prevVal, currVal) => {
      return prevVal + currVal
    }, 0)
    this.setState(() => {
      return {
        isPurchasable: sum > 0
      }
    })
  }

  private addIngrdHandler = (type: string) => {
    const { ingredients, prices } = this.state
    if (ingredients) {
      const newState = {
        ...ingredients,
      }
      newState[type] = ingredients[type] + 1
      this.setState((prevState) => {
        const newPrice = prevState.totalPrice + prices[type]
        return {
          ingredients: newState,
          totalPrice: newPrice
        }
      })
      this.updatePurchase(newState)
    }
  }

  private subIngrdHandler = (type: string) => {
    const { ingredients, prices } = this.state
    if (ingredients) {
      const newState = {
        ...ingredients,
      }
      newState[type] = ingredients && ingredients[type] - 1
      this.setState((prevState) => {
        const newPrice = prevState.totalPrice - prices[type]
        return {
          ingredients: newState,
          totalPrice: newPrice
        }
      })
      this.updatePurchase(newState)
    }
  }

  private checkIfZero = (ingredients: IBurgerIngredients) => {
    const newObj = {
      ...ingredients
    }
    for (const ingrd in newObj) {
      newObj[ingrd] = newObj[ingrd] <= 0
    }
    return newObj
  }

  private showSummary = () => {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      }
    })
  }

  private purchaseCheckout = () => {
    this.setState((prevState) => {
      return {
        isLoading: !prevState.isLoading
      }
    })
    // alert('One krabby patty coming up!')
    const { ingredients, totalPrice } = this.state
    const order = {
      ingredients: ingredients,
      cost: totalPrice,
      customer: {
        name: 'Joe',
        address: {
          street: 'Test',
          postCode: 'TE57 2OO',
          town: 'TestyTrap'
        },
        email: 'test@test.com',
      },
      timestamp: moment().format("DD-MM-YYYY"),
      deliveryMethod: 'driver'
    }
    OrdersClient.post('/orders.json', order) // using a Firebase endpoint
      .then(res => {
        this.setState((prevState) => {
          return {
            isLoading: !prevState.isLoading,
            isVisible: !prevState.isVisible
          }
        })
      })
      .catch(error => {
        this.setState(() => {
          return {
            isLoading: false,
            isVisible: false
          }
        })
      })
  }

  private renderIngredientsError = (error: boolean, ingredients) => {
    if (error) {
      return (
        <StyledBurger>
          <p>The Krusty Krab ran us out of business... again</p>
        </StyledBurger>
      )
    } else {
      const burger = ingredients ? <Burger ingredients={ingredients} /> : <Spinner />
      return burger
    }
  }

  public render() {
    const addRemHandlers: IAddRemHandlers = {
      addHandler: this.addIngrdHandler,
      subHandler: this.subIngrdHandler
    }
    const { ingredients, totalPrice, isPurchasable, isVisible, isLoading, error } = this.state
    const disabled = ingredients && this.checkIfZero(ingredients)

    const context = {
      setIngredients: addRemHandlers,
      isDisabled: disabled,
      totalPrice: totalPrice,
      isPurchasable: isPurchasable,
      showModal: this.showSummary
    }

    let orderSummary = ingredients && (
      <OrderSummary
        ingredients={ingredients}
        onClick={this.purchaseCheckout}
      />
    )
    
    if (isLoading) {
      orderSummary = (
        <Spinner />
      )
    }
    return (
      <>
        <OrderContext.Provider value={context}>
          <Modal isVisible={isVisible}>
            <Backdrop isVisible={isVisible} clicked={this.showSummary} />
            <StyledSummary>
              {orderSummary}
            </StyledSummary>
          </Modal>
          {this.renderIngredientsError(error, ingredients)}
          <BuildControls />
        </OrderContext.Provider>
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, OrdersClient)
