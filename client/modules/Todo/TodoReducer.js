import { ADD_TODO, ADD_TODOS, DELETE_TODO } from './TodoActions';

// Initial State
const initialState = { data: [] };

const TodoReducer = (state = initialState, action) => {
  state = initialState
  switch (action.type) {
    case ADD_TODO :
      return {
        data: [action.todo, ...state.data],
      };

    case ADD_TODOS :
      return {
        data: action.todos,
      };

    case DELETE_TODO :
      return {
        data: state.data.filter(todo => todo.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all todos
export const getTodos = state => state.todos.data;

// Get todo by cuid
export const getTodo = (state, cuid) => state.todos.data.filter(todo => todo.cuid === cuid)[0];

// Export Reducer
export default TodoReducer;
