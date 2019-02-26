import React from 'react'
import ReactDOM from 'react-dom'


class Modal extends React.Component {
  constructor(props){
    super(props)
    this.modal = document.createElement('div')
  }
  private modal

  public componentDidMount() {
    document.body.appendChild(this.modal)
  }
  
  public componentWillUnMount() {
    document.body.removeChild(this.modal)
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.modal
    )
  }
}

export default Modal
