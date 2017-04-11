import React, { Component } from 'react'
import UserForm from '../containers/userform.jsx'

class ContactSection extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }
  render() {
    return(
      <UserForm onSubmit={this.handleSubmit}/>
    )
  }
}

export default ContactSection
