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

const ingredients: IBurgerIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
}

const prices: IBurgerIngredients = {
  salad: 0.2,
  bacon: 0.5,
  cheese: 0.3,
  meat: 1.20,
}

export interface IIPriceState {
  price: IBurgerIngredients
  setPrices: Function
}

class BurgerBuilder extends React.Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      ingredients,
      prices
    }
  }


  public render() {
   return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls setIngredient={() => {}} setPrice={undefined} />
    </>
  )
}
}

export default BurgerBuilder
