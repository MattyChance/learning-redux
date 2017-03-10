import React, { Component } from 'react';
import './App.css';

import {ItemForm} from './itemForm';
import {Clock} from './clock'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Matty&apos;s To-Do List</h2>
          <Clock />
        </div>

        <ItemForm />

      </div>
    );
  }
}


export default App;
