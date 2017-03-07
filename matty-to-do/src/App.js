import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {items: []};

  }

  render() {
    console.log(this.state)
    const listItems = this.state.items.map( (item) => {
      return <li>{item}</li>
    })

    return (
      <div className="App">
        <div className="App-header">
          <h2>Matty&apos;s To-Do List</h2>
        </div>

        <form>
          <label>
            What do you want to achieve today?
            <input type="text" name="name"/>
          </label>
          <input type="submit" value="Submit" onClick={this.handleClick}/>
        </form>

        <ul className="list">
          {listItems}
        </ul>

      </div>
    );
  }
}


export default App;
