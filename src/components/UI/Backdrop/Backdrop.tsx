import React from 'react'

interface IBackdrop {
  isVisible: boolean
  clicked: Function
}


const Backdrop: React.FunctionComponent<IBackdrop> = ({isVisible, clicked}) => {
  const renderBackdrop = isVisible => {
    if (isVisible) {
      return <div onClick={() => clicked()}>BACKDROP MINUS STYLING</div>
    }
    return null
  }
  return (
    <>
      {renderBackdrop(isVisible)}
    </>
  )
}

export default Backdrop
