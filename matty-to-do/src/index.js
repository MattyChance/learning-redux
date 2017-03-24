import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers/reducers.js'
import App from './components/App.js'

import './index.css'

let store = createStore(todoApp)

//
//
// let unsubscribe = store.subscribe( () =>
//   console.log(store.getState())
// )
//
// store.dispatch(addTodo('book an appointment with doctor'))
// store.dispatch(addTodo('get groceries for dinner'))
// store.dispatch(addTodo('gym at 8pm'))
// store.dispatch(addTodo('make gift for jo'))
//
// store.dispatch(deleteTodo(3))
//
// unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
