import React, { Component } from 'react';
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
        <Scoreboard />
      </div>
    );
  }
}

export default App;
