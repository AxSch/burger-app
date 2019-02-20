import React, { Component } from 'react';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout.tsx'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.tsx'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
