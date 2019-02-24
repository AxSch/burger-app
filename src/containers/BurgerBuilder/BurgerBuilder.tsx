import React from 'react'
import Burger from '../../components/Burger/Burger'
import styled from 'styled-components'

export interface IBurgerIngredients {
  salad: number,
  bacon: number,
  cheese: number,
  meat: number,
}
interface IBurgerBuilderState {
  ingredients: IBurgerIngredients
}

const initialState = {
    salad: 2,
    bacon: 2,
    cheese: 2,
    meat: 1,
}

const burgerBuilder: React.FunctionComponent<{}>= () => {
  const [ingrednts, setIngredients] = React.useState(initialState)
  return (
    <>
      <Burger ingredients={ingrednts} />
      <div>Burger controls</div>
    </>
  )
}

export default burgerBuilder
