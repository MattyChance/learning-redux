import React, {Component} from 'react'

export class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()}
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return(
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    )
  }

}
