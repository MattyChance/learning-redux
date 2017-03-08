import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {items: []};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({items: this.state.items.concat(this.input.value)});
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Matty&apos;s To-Do List</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            What do you want to achieve today?
            <input type="text" ref={ (input) => this.input = input }/>
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <ul className="list">
          {this.state.items.map( (item) => {return <li>{item}</li>}) }
        </ul>

      </div>
    );
  }
}


export default App;
