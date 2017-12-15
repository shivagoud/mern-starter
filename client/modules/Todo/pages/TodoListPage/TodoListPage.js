import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import TodoList from '../../components/TodoList';
import TodoCreateWidget from '../../components/TodoCreateWidget/TodoCreateWidget';

// Import Actions
import { addTodoRequest, fetchTodos, deleteTodoRequest } from '../../TodoActions';

// Import Selectors
import { getTodos } from '../../TodoReducer';

class TodoListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  handleDeleteTodo = todo => {
    if (confirm('Do you want to delete this todo')) { // eslint-disable-line
      this.props.dispatch(deleteTodoRequest(todo));
    }
  };

  handleAddTodo = (title) => {
    this.props.dispatch(addTodoRequest({title}));
  };

  render() {
    return (
      <div>
        <TodoCreateWidget addTodo={this.handleAddTodo} />
        <TodoList handleDeleteTodo={this.handleDeleteTodo} todos={this.props.todos} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
TodoListPage.need = [() => { return fetchTodos(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    todos: getTodos(state),
  };
}

TodoListPage.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

TodoListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TodoListPage);
