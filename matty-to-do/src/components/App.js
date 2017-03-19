import React from 'react';
import '../App.css';

import Clock from '../components/clock.js'

import AddTodo from '../containers/addTodo.jsx'
import VisibleTodoList from '../containers/visibleTodoList.jsx'
import Footer from '../components/footer.jsx'

const App = () => {

  return (
    <div>
      <div className="App-header">
        <h2>Matty&apos;s To-Do List</h2>
        <Clock />
      </div>


      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />

      </div>


    </div>
  )
}

export default App;
