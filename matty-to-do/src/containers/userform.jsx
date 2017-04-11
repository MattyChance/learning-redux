import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import DropdownList from '../components/selectPart'

class UserForm extends Component{

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    const {handleSubmit} = this.props

    console.log(this.props)

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>

        <div>
          <label htmlFor="hobby">Select from the dropdown list: </label>
          <Field name="hobby" component="input" type="text"/>
        </div>

        <div>
          <Field name="hobby" component={DropdownList} type="text"/>
        </div>


        <button type="submit">Submit</button>

      </form>
    )
  }
}

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserForm
