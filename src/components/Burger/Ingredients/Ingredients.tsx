import * as React from 'react'
import styles from './Ingredients.module.scss'

interface IIngredientProps {
  type: string
}

const ingredient: React.SFC<IIngredientProps> = ({type}) => {

  const ingrdntTypes = {
    'bread-bottom': (<div className={styles["Bread-Bottom"]}></div>),
    'bread-top': (
      <>
        <div className={styles["Seeds1"]}></div>
        <div className={styles["Seeds2"]}></div>
      </>
    ),
    'Meat': (<div className={styles["Bread-Bottom"]}></div>),
    'Cheese': (<div className={styles["Cheese"]}></div>),
    'Salad': (<div className={styles["Salad"]}></div>),
    'Bacon': (<div className={styles["Bacon"]}></div>)
  }

  return ingrdntTypes[type]
}

export default ingredient
