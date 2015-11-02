import React from 'react';
import ReactDOM from 'react-dom';

import LoginHandler from './components/Login.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <div to="app">Home</div>
        <div to="login">Login</div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.body);
