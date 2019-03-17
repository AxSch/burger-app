
import React from 'react'
import Button from '../../../components/UI/Button/Button'
import styled from 'styled-components'
import { IBurgerIngredients } from '../../../containers/BurgerBuilder/BurgerBuilder'

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
}

class ContactData extends React.Component<IContactDataProps> {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       address: {
         street:'',
         postalCode:'',
        },
    }
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
          <Button type="Sucess" onClick={() => {}}>Order</Button>
        </form>
      </StyledContactData>
    )
  }
}

export default ContactData
