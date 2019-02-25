import React from 'react'
import Burger from '../../components/Burger/Burger'
import styled from 'styled-components'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export interface IBurgerIngredients {
  salad: number,
  bacon: number,
  cheese: number,
  meat: number,
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
  ingredients: IBurgerIngredients,
  prices: IBurgerIngredients
  totalPrice: number
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
      totalPrice: 0.20
    }
  }

  private addIngrdHandler = type => {
    const { ingredients, prices } = this.state
    const newState = {
      ...ingredients,
    }
    this.setState((prevState) => {
      newState[type] = prevState.ingredients[type] + 1
      const newPrice = prevState.totalPrice + prices[type]
      return {
        ingredients: newState,
        totalPrice: newPrice
      }
    })
  }

  private subIngrdHandler = type => {
    const { ingredients, prices } = this.state
    const newState = {
      ...ingredients,
    }
    this.setState((prevState) => {
      newState[type] = prevState.ingredients[type] - 1
      const newPrice = prevState.totalPrice - prices[type]
      return {
        ingredients: newState,
        totalPrice: newPrice
      }
    })
  }


  public render() {
    const addRemHandlers: IAddRemHandlers = {
      addHandler: this.addIngrdHandler,
      subHandler: this.subIngrdHandler
    }
    const { ingredients } = this.state
    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls setIngredients={addRemHandlers} />
      </>
    )
  }
}

export default BurgerBuilder
