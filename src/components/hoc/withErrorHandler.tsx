import React from 'react'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import { StyledSummary } from '../../containers/BurgerBuilder/BurgerBuilder'

const withErrorHandler = (Component, OrderClient) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        error: {} as Error
      }
      OrderClient.interceptors.request.use(req => {
        this.setState({ error: {} })
        return req
      })
      OrderClient.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error })
        })
    }

    errorHandler = () => {
      this.setState({ error: {} })
    }

    render() {
      const { error } = this.state
      const isError = Object.keys(error).length > 0
      return (
        <>
          <Modal isVisible={isError ? isError : false}>
            <StyledSummary>
              {isError ? error.message : null}
            </StyledSummary>
          </Modal>
          <Backdrop isVisible={isError ? isError : false} clicked={this.errorHandler} />
          <Component {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler
