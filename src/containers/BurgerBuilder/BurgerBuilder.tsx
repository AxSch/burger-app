import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import styled from 'styled-components'
import { ingredientsObj, pricesObj } from '../../utils/constants'
import OrderContext from '../../context/OrderContext';

const StyledSummary = styled.div`
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
  ingredients: IBurgerIngredients
  prices: IBurgerIngredients
  totalPrice: number
  isPurchasable: boolean
  isVisible: boolean
}

export interface IAddRemHandlers {
  subHandler: Function
  addHandler: Function
}


class BurgerBuilder extends React.Component<{}, IBurgerBuilderState> {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: ingredientsObj,
      prices: pricesObj,
      totalPrice: 0.20,
      isPurchasable: false,
      isVisible: false
    }
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

  private subIngrdHandler = (type: string) => {
    const { ingredients, prices } = this.state
    const newState = {
      ...ingredients,
    }
    newState[type] = ingredients[type] - 1
    this.setState((prevState) => {
      const newPrice = prevState.totalPrice - prices[type]
      return {
        ingredients: newState,
        totalPrice: newPrice
      }
    })
    this.updatePurchase(newState)
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
    alert('One krabby patty coming up!')
  }

  public render() {
    const addRemHandlers: IAddRemHandlers = {
      addHandler: this.addIngrdHandler,
      subHandler: this.subIngrdHandler
    }
    const { ingredients, totalPrice, isPurchasable, isVisible } = this.state
    const disabled = this.checkIfZero(ingredients)
    
    const context = {
      setIngredients: addRemHandlers,
      isDisabled: disabled,
      totalPrice: totalPrice,
      isPurchasable: isPurchasable,
      showModal: this.showSummary
    }

    return (
      <>
        <OrderContext.Provider value={context}>
          <Modal isVisible={isVisible}>
            <Backdrop isVisible={isVisible} clicked={this.showSummary} />
            <StyledSummary>
              <OrderSummary
                ingredients={ingredients}
                onClick={this.purchaseCheckout}
              />
            </StyledSummary>
          </Modal>
          <Burger ingredients={ingredients} />
          <BuildControls />
        </OrderContext.Provider>
      </>
    )
  }
}

export default BurgerBuilder
