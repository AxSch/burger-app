import React from 'react'
import styled from 'styled-components'

const StyledOrders = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const Order: React.FunctionComponent = () => {
  return (
    <StyledOrders>
      <p>Ingredients:</p>
      <p>Price: <strong>£costs</strong></p>
    </StyledOrders>
  )
}

export default Order