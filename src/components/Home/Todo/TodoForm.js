import React from 'react';

let TodoForm = React.createClass({
  handleSubmit: function() {
    var text = this.refs.todo.value.trim();
    if (!text) {
      return;
    }
    this.props.handleSubmit({text: text});
    this.refs.todo.value = "";
    return;
  },

  render() {
    return(
      <div>
        <input placeholder="Todo" ref="todo" />
        <button className="btn btn-default" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
});

export default TodoForm;
