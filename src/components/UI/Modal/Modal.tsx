import React from 'react'
import ReactDOM from 'react-dom'


interface IModal {
  isVisible: boolean
}

class Modal extends React.Component<IModal> {
  constructor(props){
    super(props)
    this.modal = document.createElement('div')
  }
  private modal: Element

  public componentDidMount() {
    document.body.appendChild(this.modal)
  }
  
  public componentWillUnMount() {
    document.body.removeChild(this.modal)
  }

  private renderModal = isVisible => {
    if (isVisible) {
      return ReactDOM.createPortal(
        this.props.children,
        this.modal
      )
    }
    return null
  }

  public render() {
    const { isVisible } = this.props
    return (
      <>
        {this.renderModal(isVisible)}
      </>
    )
  }
}

export default Modal
