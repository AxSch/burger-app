import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export interface IBurgerIngredients {
  salad: number | boolean,
  bacon: number | boolean,
  cheese: number | boolean,
  meat: number | boolean,
}

const ingredientsObj: IBurgerIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
}

const pricesObj: IBurgerIngredients = {
  salad: 0.2,
  bacon: 0.5,
  cheese: 0.3,
  meat: 1.20,
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

  private updatePurchase  = (ingredients:IBurgerIngredients) => {
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


  public render() {
    const addRemHandlers: IAddRemHandlers = {
      addHandler: this.addIngrdHandler,
      subHandler: this.subIngrdHandler
    }
    const { ingredients, totalPrice, isPurchasable, isVisible } = this.state
    const disabled = this.checkIfZero(ingredients)
    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls 
          setIngredients={addRemHandlers} 
          isDisabled={disabled}
          totalPrice={totalPrice}
          isPurchasable={isPurchasable}
          isVisible={isVisible}
          showModal={this.showSummary}
        />
      </>
    )
  }
}

export default BurgerBuilder
