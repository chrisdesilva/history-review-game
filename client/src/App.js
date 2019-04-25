import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import Construction from './components/Construction'
import './App.css'

class App extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  render() {
    return (
      <Router className="App">
        <Route path="/" exact component={Construction} />
        <Route path="/scoreboard" exact component={Scoreboard} />
        <Route path="/gameboard" exact component={GameBoard} />
      </Router>
    );
  }
}

export default App;
