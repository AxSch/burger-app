import React from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControl/BuildControl'
import { IAddRemHandlers } from '../../../containers/BurgerBuilder/BurgerBuilder';

const StyledControls = styled.div`
  width: 100%;
  background-color: #CF8F2E;
  display: flex;
  flex-flow: coloumn;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

interface IControl {
  label: string
  type:string
}

interface IBuildControlsProps {
  setIngredients: IAddRemHandlers
}

const buildControls: React.FunctionComponent<IBuildControlsProps> = ({ setIngredients }) => {

  const controls: IControl[] = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
  ]

  const renderControl = (controls: IControl[]) => {
    return controls.map(ctrl => <BuildControl key={ctrl.label} ingredientLabel={ctrl.label} type={ctrl.type} addRemHandlers={setIngredients} />)
  }
  return (
    <StyledControls>
      {renderControl(controls)}
    </StyledControls>
  )
}

export default buildControls
