import React from 'react'
import styled from 'styled-components'
import OrdersClient from '../../http/OrdersClient'

const StyledOrders = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

interface IOrdersState {
  orders: []
  isLoading: boolean
}

class Order extends React.Component<{}, IOrdersState> {
  constructor(props) {
    super(props)
  
    this.state = {
       orders: [],
       isLoading: false
    }
  }
  
  public componentDidMount() {
    OrdersClient.get('/orders.json')
      .then(res => {

      })
  }

  public render() {
    return (
      <StyledOrders>
        <p>Ingredients:</p>
        <p>Price: <strong>£costs</strong></p>
      </StyledOrders>
    )
  }
}

export default Order