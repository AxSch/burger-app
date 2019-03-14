import React, { Component } from 'react';
import Layout from './components/Layout/Layout.tsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.tsx'
import Checkout from './containers/Checkout/Checkout.tsx'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
