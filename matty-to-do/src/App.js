import React, { Component } from 'react';
import './App.css';

import {ItemForm} from './itemForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {clock: ""};

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      clock: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Matty&apos;s To-Do List</h2>
          <h2>{this.state.clock}</h2>
        </div>

        <ItemForm />

      </div>
    );
  }
}


export default App;
