import React from 'react'
import styled from 'styled-components'

const StyledControl = styled.div`
  display: flex;
  justify-control: space-between;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: 5px 0;
  padding: 10px 0;

  .button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
  }
`

interface IbuildControlProps {
  ingredientLabel: string
}

const buildControl: React.FunctionComponent<IbuildControlProps> = ({ingredientLabel}) => {
  return (
    <StyledControl>
      <div>{ingredientLabel}</div>
      <button>Add</button>
      <button>Remove</button>
    </StyledControl>
  )
}

export default buildControl
