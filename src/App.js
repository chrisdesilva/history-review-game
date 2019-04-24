import React from 'react';
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import './App.css'

const App = () => {
    return (
      <div className="App">
        <GameBoard />
        <Scoreboard />
      </div>
    );
}

export default App;
