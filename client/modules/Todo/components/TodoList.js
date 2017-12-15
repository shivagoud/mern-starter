import React, { PropTypes } from 'react';

// Import Components
import TodoListItem from './TodoListItem/TodoListItem';

function TodoList(props) {
  return (
    <ol>
      <br/>
      <h2>List of Todos</h2>
      {
        props.todos.map(todo => (
          <TodoListItem
            todo={todo}
            key={todo.cuid}
            onDelete={() => props.handleDeleteTodo(todo.cuid)}
          />
        ))
      }
    </ol>
  );
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
