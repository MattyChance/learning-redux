import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';


const options = [
  {value: 1, label: "eating chocolate"},
  {value: 2, label: "playing basketball"},
  {value: 3, label: "drinking tea"},
  {value: 4, label: "playing videogames"},
]

class DropdownList extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleSelectChange = (val) => {
    this.setState({value: val})
  }

  render() {
      return(
        <div>
          <Select name="hobbies" options={options} value={this.state.value} onChange={this.handleSelectChange}/>
        </div>
      )
  }
}


export default DropdownList
