import React, { Component, PropTypes } from 'react';

export class TodoCreateWidget extends Component {
  addTodo = () => {
    const titleRef = this.refs.title;
    if (titleRef.value) {
      console.log("test");
      this.props.addTodo(titleRef.value);
      titleRef.value = '';
    }
  };

  render() {
    return (
      <div>
        <h2> Create New Todo </h2>
        <input placeholder='Add todo text' ref="title" />
        <button onClick={this.addTodo}>Submit</button>
      </div >
    );
  }
}

TodoCreateWidget.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoCreateWidget;
