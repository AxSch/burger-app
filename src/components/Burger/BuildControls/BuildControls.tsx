import React from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControl/BuildControl'
import { IAddRemHandlers, IBurgerIngredients } from '../../../containers/BurgerBuilder/BurgerBuilder';

const StyledControls = styled.div`
  width: 100%;
  background-color: #CF8F2E;
  display: flex;
  flex-flow: coloumn;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

const StyledButton = styled.button`
  background-color: #DAD735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  :hover, :active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
  
  :disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  :not(:disabled) {
    animation: enable 0.3s linear;
  }

  @keyframes enable {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

interface IControl {
  label: string
  type: string
}

interface IBuildControlsProps {
  setIngredients: IAddRemHandlers
  isDisabled: IBurgerIngredients
  totalPrice: number
  isPurchasable: boolean
}

const buildControls: React.FunctionComponent<IBuildControlsProps> = ({ setIngredients, isDisabled, totalPrice, isPurchasable }) => {

  const controls: IControl[] = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  ]

  const renderControl = (controls: IControl[]) => {
    return controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          ingredientLabel={ctrl.label}
          type={ctrl.type}
          addRemHandlers={setIngredients}
          isDisabled={isDisabled}
        />
      )
    })
  }
  return (
    <StyledControls>
      <div>
        <p>Total Price: £{totalPrice.toFixed(2)}</p>
      </div>
      {renderControl(controls)}
      <StyledButton disabled={!isPurchasable} >ORDER NOW</StyledButton>
    </StyledControls>
  )
}

export default buildControls
