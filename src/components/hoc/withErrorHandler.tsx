import React from 'react'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../../components/UI/Backdrop/Backdrop';

interface IErrorHandlerProps {
  isVisible: boolean
}

const withErrorHandler = (Component, OrderClient) => {
  return class extends Component {
    state = {
      error: {} as Error
    }

    componentDidMount() {
      OrderClient.interceptors.request.use(req => {
        this.setState({error: {}})
        return req
      })
      OrderClient.interceptors.request.use(res => res, error => {
        this.setState({error: error}) 
      })
    }

    errorHandler = () => {
      this.setState({error: {}})
    }

    render() {
      const { error } = this.state
      const isError = Object.keys(error).length > 0
      return (
        <>
          <Modal isVisible={isError ? isError : false}>
            {isError ? error.message : null}
          </Modal>
          <Backdrop isVisible={isError ? isError : false} clicked={this.errorHandler} />
          <Component {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler
