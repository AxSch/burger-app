import React from 'react'
import Burger from '../../../components/Burger/Burger'
import Button from '../../../components/UI/Button/Button'
import styled from 'styled-components'
import { IBurgerIngredients } from '../../../containers/BurgerBuilder/BurgerBuilder'

const StyledSummary = styled.div`
  width: 80%;
  margin: auto;
  text-align: center

  @media (min-width: 600px) {
    width: 500px
  }
`
interface ICheckoutSummary {
  ingredients: IBurgerIngredients
  cancelCheckout: Function
  continueCheckout: Function
}

const CheckoutSummary: React.FunctionComponent<ICheckoutSummary> = ({ingredients, cancelCheckout, continueCheckout}) => {
  return (
    <StyledSummary>
      <h1>You'll find this to be better than the Krabby Patty!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients} />
        <Button type="Danger" onClick={cancelCheckout}>Cancel</Button>
        <Button type="Success" onClick={continueCheckout}>Next</Button>
      </div>
    </StyledSummary>
  )
}

export default CheckoutSummary