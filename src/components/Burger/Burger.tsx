import React from 'react'
import Ingredient from './Ingredients/Ingredients'
import styled from 'styled-components'
import { IBurgerIngredients } from '../../containers/BurgerBuilder/BurgerBuilder'

const StyledBurger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`

interface IFunctionComponentProps {
  ingredients: IBurgerIngredients
}


const burger: React.FunctionComponent<IFunctionComponentProps> = ({ingredients}) => {
  const renderIngrds = ingredients => {
    const ingreds = Object.keys(ingredients).map(ingrd => {
        return [...Array(ingredients[ingrd])].map((_, idx) => {
          return <Ingredient type={ingrd} key={ingrd + idx} />
        })
      })
    return ingreds
  }
  return (
    <StyledBurger>
      <Ingredient type="bread-top" />
        {renderIngrds(ingredients)}
      <Ingredient type="bread-bottom" />
    </StyledBurger>
  )
}

export default burger
