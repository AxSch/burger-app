import React from 'react'
import styled from 'styled-components'
import Order from "../../components/Order/Order"
import OrdersClient from '../../http/OrdersClient'
import withError from '../../components/hoc/withError'

const StyledOrders = styled.div`
  width: 100%;
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
class Orders extends React.Component<{}, IOrdersState> {
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
        const orders = [] as any
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            orders.push({
              ...res.data[key],
              id: key
            })
          }
        }
        this.setState((prevState) => {
          return {
            isLoading: !prevState.isLoading,
            orders: orders
          }
        })
      })
      .catch(error => {
        this.setState(() => {
          return {
            isLoading: false
          }
        })
      })
  }

  public render() {
    return (
      <>
        <Order />
      </>
    )
  }
}

export default withError(Orders, OrdersClient)
