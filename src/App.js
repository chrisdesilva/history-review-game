import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm border">Progressive Leaders</div>
            <div className="col-sm border">Women's Rights</div>
            <div className="col-sm border">Worker's Rights</div>
            <div className="col-sm border">Political Reform</div>
            <div className="col-sm border">Civil Rights</div>
          </div>
          <div className="row">
            <div className="col-sm">100</div>
            <div className="col-sm">100</div>
            <div className="col-sm">100</div>
            <div className="col-sm">100</div>
            <div className="col-sm">100</div>
          </div>
          <div className="row">
            <div className="col-sm">200</div>
            <div className="col-sm">200</div>
            <div className="col-sm">200</div>
            <div className="col-sm">200</div>
            <div className="col-sm">200</div>
          </div>
          <div className="row">
            <div className="col-sm">300</div>
            <div className="col-sm">300</div>
            <div className="col-sm">300</div>
            <div className="col-sm">300</div>
            <div className="col-sm">300</div>
          </div>
          <div className="row">
            <div className="col-sm">400</div>
            <div className="col-sm">400</div>
            <div className="col-sm">400</div>
            <div className="col-sm">400</div>
            <div className="col-sm">400</div>
          </div>
          <div className="row">
            <div className="col-sm">500</div>
            <div className="col-sm">500</div>
            <div className="col-sm">500</div>
            <div className="col-sm">500</div>
            <div className="col-sm">500</div>
          </div>
          <div className="row mt-5">
            Scoreboard
            <div className="col-sm">Team 1:</div>
            <div className="col-sm">Team 2:</div>
            <div className="col-sm">Team 3:</div>
            <div className="col-sm">Team 4:</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
