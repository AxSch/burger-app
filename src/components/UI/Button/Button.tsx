import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
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

  &.Success {
    background-color: #5C9210;
  }

  &.Danger {
    background-color: #944317;
  }
`

interface IButtonProps {
  type: string
  onClick: Function
}

const Button:React.FunctionComponent<IButtonProps> = ({ type, onClick, children }) => {
  return (
    <>
      <StyledButton className={type} onClick={onClick}>{children}</StyledButton>
    </>
  )
}

export default Button
