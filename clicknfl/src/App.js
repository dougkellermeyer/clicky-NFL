import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Memory Challenge Game</h1>
        </header>
        <p className="App-intro">
         To win the game, you must click on each icon ONCE. If you click the same icon more than once you lose!
        </p>
      </div>
    );
  }
}

export default App;
