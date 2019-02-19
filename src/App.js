import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout.tsx'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Hey there!</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
