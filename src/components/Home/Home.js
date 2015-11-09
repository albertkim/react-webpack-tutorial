import React from 'react';
import Try from './Try';
import Todo from './Todo/Todo';

let Home = React.createClass({
  render() {
    return(
      <div className="container">
        <div className="jumbotron"> Find the best loans in Canada!</div>
        <Try />
        <Todo />
      </div>
    );
  }
});

export default Home;
