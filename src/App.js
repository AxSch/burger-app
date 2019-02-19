import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import layout from './components/Layout/Layout.tsx'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
