import React from 'react'

interface IBackdrop {
  isVisible: boolean
}


const Backdrop: React.FunctionComponent<IBackdrop> = ({isVisible}) => {
  const renderBackdrop = isVisible => {
    if (isVisible) {
      return <div></div>
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
