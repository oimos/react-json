import React, { Component } from 'react';
import Form from './containers/Form'

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
       <Form />
      </div>
    );
  }
}

export default App;
