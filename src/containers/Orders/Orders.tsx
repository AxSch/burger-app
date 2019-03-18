import React from 'react'
import styled from 'styled-components'
import Order from "../../components/Order/Order"

const StyledOrders = styled.div`
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

class Orders extends React.Component {
  public render() {
    return (
      <>
        <Order />
      </>
    )
  }
}

export default Orders
