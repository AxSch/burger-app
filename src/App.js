import React, { Component } from 'react';
import Layout from './components/Layout/Layout.tsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.tsx'
import Checkout from './containers/Checkout/Checkout.tsx'
import Orders from './containers/Orders/Orders.tsx'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" exact component={Orders}/>
            <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
