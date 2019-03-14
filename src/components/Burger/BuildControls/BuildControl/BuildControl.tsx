import React from 'react'
import styled from 'styled-components'
import OrderContext from '../../../../context/OrderContext'


const StyledControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;

  .Less {  
    background-color: #D39952;
    color: white;
  }

  .More {
    background-color: #8F5E1E;
    color: white;
  }

  .Less:hover, .Less:active {  
    background-color: #DAA972;
    color: white;
  }

  .More:hover, .More:active {
    background-color: #99703F;
    color: white;
  }
`

const StyledLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

const StyledButton = styled.button`
  width: auto;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }

  :hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`

interface IbuildControlProps {
  ingredientLabel: string
  type: string
}

const BuildControl: React.FunctionComponent<IbuildControlProps> = ({ ingredientLabel, type }) => {
  const context = React.useContext(OrderContext)

  return (
    <StyledControl>
      <StyledLabel>{ingredientLabel}</StyledLabel>
      <StyledButton className="More" onClick={() => context.setIngredients.add(type)}>Add</StyledButton>
      <StyledButton className="Less" disabled={context.isDisabled ? context.isDisabled[type]: null} onClick={() => context.setIngredients.sub(type)}>Remove</StyledButton>
    </StyledControl>
  )
}

export default BuildControl
