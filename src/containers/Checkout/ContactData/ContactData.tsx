
import React from 'react'
import Button from '../../../components/UI/Button/Button'
import styled from 'styled-components'

const StyledContactData = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;

  @media (min-width: 600px) {
    width: 500px;
  }
`

class ContactData extends React.Component {
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
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street address" />
          <input type="text" name="postCode" placeholder="Post Code" />
          <Button type="Sucess" onClick={() => {}}>Order</Button>
        </form>
      </StyledContactData>
    )
  }
}

export default ContactData
