import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

let Todo = React.createClass({
  render() {
    return(
      <div>
        <h2>Todo</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

export default Todo;
