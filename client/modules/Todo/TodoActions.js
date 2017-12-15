import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

// Export Actions
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function addTodoRequest(todo) {
  return (dispatch) => {
    return callApi('todos', 'post', {
      todo: {
        title: todo.title,
      },
    }).then(res => dispatch(addTodo(res.todo)));
  };
}

export function addTodos(todos) {
  return {
    type: ADD_TODOS,
    todos,
  };
}

export function fetchTodos() {
  return (dispatch) => {
    return callApi('todos').then(res => {
      dispatch(addTodos(res.todos));
    });
  };
}

export function fetchTodo(cuid) {
  return (dispatch) => {
    return callApi(`todos/${cuid}`).then(res => dispatch(addTodo(res.todo)));
  };
}

export function deleteTodo(cuid) {
  return {
    type: DELETE_TODO,
    cuid,
  };
}

export function deleteTodoRequest(cuid) {
  return (dispatch) => {
    return callApi(`todos/${cuid}`, 'delete').then(() => dispatch(deleteTodo(cuid)));
  };
}

