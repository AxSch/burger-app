import React, { FunctionComponent } from 'react'
import { IBurgerIngredients } from 'containers/BurgerBuilder/BurgerBuilder'
import Button from '../../../components/UI/Button/Button';
import OrderContext from '../../../context/OrderContext';

interface IOrderSummary {
  ingredients: IBurgerIngredients
  onClick: Function
}

const OrderSummary: FunctionComponent<IOrderSummary> = ({ ingredients, onClick }) => {
  const context = React.useContext(OrderContext)
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
      <p>Total Price:</p>
      <p>£{context.totalPrice.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button type="Success" onClick={onClick}>CHECKOUT</Button>
      <Button type="Danger" onClick={onClick}>CANCEL</Button>
    </>
  )
}

export default OrderSummary
