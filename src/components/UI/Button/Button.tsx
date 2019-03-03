import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  .Success {
    color: #5C9210;
  }

  .Danger {
    color: #944317;
  }
`

interface IButtonProps {
  type: string
  onClick: Function
}

const Button:React.FunctionComponent<IButtonProps> = ({ type, onClick }) => {
  return (
    <>
      <StyledButton>Click me!</StyledButton>
    </>
  )
}

export default Button
