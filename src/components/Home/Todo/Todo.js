import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

let Todo = React.createClass({
  getInitialState: function() {
    return {data: [{
      text: "asdf"
    }]};
  },

  handleSubmit: function(todo) {
    var oldState = this.state.data;
    oldState.push(todo);
    this.setState({
      data: oldState
    });
    console.log(this.state.data);
  },

  render() {
    return(
      <div>
        <h2>Todo</h2>
        <TodoList data={ this.state.data } />
        <TodoForm handleSubmit = {this.handleSubmit}/>
      </div>
    );
  }
});

export default Todo;
