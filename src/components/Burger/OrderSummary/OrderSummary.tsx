import React, { FunctionComponent } from 'react'
import { IBurgerIngredients } from 'containers/BurgerBuilder/BurgerBuilder'

interface IOrderSummary {
  ingredients: IBurgerIngredients
}

const OrderSummary: FunctionComponent<IOrderSummary> = ({ ingredients }) => {
  const ingredientsSummary = ingredients => {
    return Object.keys(ingredients).map(ingrnt => {
      return <li key={ingrnt}><span style={{ textTransform: 'capitalize' }}>{ingrnt}</span>: {ingredients[ingrnt]}</li>
    })
  }

  return (
    <>
      <h3>Your Order</h3>
      <p>Those tasty, tasty (& organic) Burger Ingredients:</p>
      <ul>
        {ingredientsSummary(ingredients)}
      </ul>
    </>
  )
}

export default OrderSummary
