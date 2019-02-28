import React from 'react'
import styled from 'styled-components'
import { IAddRemHandlers, IBurgerIngredients } from '../../../../containers/BurgerBuilder/BurgerBuilder';

const StyledControl = styled.div`
  display: flex;
  justify-control: space-between;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: 5px 0;
  padding: 10px 0;

  button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
  }

  button:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }

  button:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`

interface IbuildControlProps {
  ingredientLabel: string
  type: string
  addRemHandlers: IAddRemHandlers
  isDisabled: IBurgerIngredients
}

const buildControl: React.FunctionComponent<IbuildControlProps> = ({ingredientLabel, addRemHandlers, type, isDisabled}) => {
  return (
    <StyledControl>
      <div>{ingredientLabel}</div>
      <button onClick={() => addRemHandlers.addHandler(type)}>Add</button>
      <button disabled={isDisabled[type]} onClick={() => addRemHandlers.subHandler(type)}>Remove</button>
    </StyledControl>
  )
}

export default buildControl
