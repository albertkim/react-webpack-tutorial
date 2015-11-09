import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home/Home';

let App = React.createClass({
  render() {
    return (
      <div>
        <NavigationBar />
        <Home />
      </div>
    );
  }
});

ReactDOM.render(
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossOrigin="anonymous" />,
  document.head
);

ReactDOM.render(<App/>, document.body);
