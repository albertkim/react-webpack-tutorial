import React from 'react';

let TodoList = React.createClass({
  render() {
    var todoList = this.props.data.map(function(todo) {
      return (
        <div>{ todo.text }</div>
      );
    });

    return (
      <div>
        {todoList}
      </div>
    );
  }
});

export default TodoList;
