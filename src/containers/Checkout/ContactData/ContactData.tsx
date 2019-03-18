
import React, { EventHandler } from 'react'
import Button from '../../../components/UI/Button/Button'
import styled from 'styled-components'
import { IBurgerIngredients } from '../../../containers/BurgerBuilder/BurgerBuilder'
import { RouteComponentProps } from 'react-router-dom'
import * as moment from 'moment'
import OrdersClient from '../../../http/OrdersClient'

const StyledContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const StyledContactInput = styled.input`
  display: block;
`
interface IContactDataProps {
  ingredients: IBurgerIngredients
  totalPrice: number
}

interface IContactAddr {
  street: string
  postalCode: string
}

interface IContactDataState {
  name: string,
  email: string,
  address: IContactAddr
  isLoading: boolean
}

class ContactData extends React.Component<IContactDataProps, IContactDataState> {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      address: {
        street: '',
        postalCode: '',
      },
      isLoading: false
    }
  }

  private orderHandler = (e) => {
    const { ingredients, totalPrice } = this.props
    const { name, address, email } = this.state
    e.preventDefault()
    const order = {
      ingredients: ingredients,
      cost: totalPrice,
      customer: {
        name: name,
        address: {
          street: address.street,
          postCode: address.postalCode,
        },
        email: email,
      },
      timestamp: moment().format("DD-MM-YYYY"),
      deliveryMethod: 'driver'
    }
    OrdersClient.post('/orders.json', order) // using a Firebase endpoint
      .then(res => {
        this.setState((prevState) => {
          return {
            isLoading: !prevState.isLoading,
          }
        })
      })
      .catch(error => {
        this.setState(() => {
          return {
            isLoading: false,
          }
        })
      })
  }

  public render() {
    return (
      <StyledContactData>
        <h4>Enter Delivery details</h4>
        <form>
          <StyledContactInput type="text" name="name" placeholder="Name" />
          <StyledContactInput type="email" name="email" placeholder="Email" />
          <StyledContactInput type="text" name="street" placeholder="Street address" />
          <StyledContactInput type="text" name="postCode" placeholder="Post Code" />
          <Button type="Sucess" onClick={this.orderHandler}>Order</Button>
        </form>
      </StyledContactData>
    )
  }
}

export default ContactData
