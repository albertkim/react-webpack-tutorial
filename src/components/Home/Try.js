import React from 'react';

let Try = React.createClass({
  render() {
    return(
      <div>
        <div className="col-md-4">
          <h2>See my loan options</h2>
          <input type="text" placeholder="Desired loan amount"></input>
          <input type="text" placeholder="Annual revenue"></input>
          <input type="text" placeholder="Age of company in years"></input>
          <input type="text" placeholder="Credit score"></input>
          <button className="btn btn-primary">See my options</button>
        </div>
      </div>
    );
  }
});

export default Try;
