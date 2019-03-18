import React from 'react'
import styled from 'styled-components'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'

const StyledOrders = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const StyledIngrds = styled.span`
  text-transform: capitalize;
  display: block;
  margin: 0 8px;
  padding: 5px;
`

interface IOrderProps {
  totalPrice: number,
  ingredients: IBurgerIngredients
}

const Order: React.FunctionComponent<IOrderProps> = ({totalPrice, ingredients}) => {
  const ingrdnts = [] as any
  for (const indgrnt in ingredients) {
    if (ingredients.hasOwnProperty(indgrnt)) {
      ingrdnts.push({
        name: indgrnt,
        amount: ingredients[indgrnt],
      })
      
    }
  }
  const renderIngrdnts = ingrdnts.map(ingrd => {
    return <StyledIngrds key={ingrd.name}>{ingrd.name} x {ingrd.amount}</StyledIngrds>
  })
  return (
    <StyledOrders>
      <p>Ingredients: {renderIngrdnts}</p>
      <p>Price: <strong>£{totalPrice.toFixed(2)}</strong></p>
    </StyledOrders>
  )
}

export default Order