import { IBurgerIngredients } from "containers/BurgerBuilder/BurgerBuilder"


const ingredientsObj: IBurgerIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
}

const pricesObj: IBurgerIngredients = {
  salad: 0.2,
  bacon: 0.5,
  cheese: 0.3,
  meat: 1.20,
}

export {
  ingredientsObj,
  pricesObj
}