import React from 'react'
import styled from 'styled-components'

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

interface IBackdrop {
  isVisible: boolean
  clicked: Function
}


const Backdrop: React.FunctionComponent<IBackdrop> = ({isVisible, clicked}) => {
  const renderBackdrop = isVisible => {
    if (isVisible) {
      return <StyledBackdrop onClick={() => clicked()}></StyledBackdrop>
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
