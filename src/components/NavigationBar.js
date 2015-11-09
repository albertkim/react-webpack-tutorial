import React from 'react';

let NavigationBar = React.createClass({
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Fundify</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="../navbar-static-top/">Login</a></li>
              <li><a href="../navbar-fixed-top/">Register</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

export default NavigationBar;
