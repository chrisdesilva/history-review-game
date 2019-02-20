import React, { Component } from 'react';
import GameBoard from './components/GameBoard'
import Scoreboard2 from './components/Scoreboard2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
        <Scoreboard2 />
      </div>
    );
  }
}

export default App;
