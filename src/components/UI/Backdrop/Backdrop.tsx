import React from 'react'

interface IBackdrop {
  isVisible: boolean
}


const backdrop = (isVisible: IBackdrop) => {
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

export default backdrop
