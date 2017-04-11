import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':

        if(state.id !== action.id) {
          return state
        }
        return {
          ...state,
          completed: !state.completed
        }

    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));

    default:
      return state;
  }
}

export const visibilityFilter = ( state = 'SHOW ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
  form: formReducer
})

export default todoApp
//
// function todoApp(state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// }
