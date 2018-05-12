import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicTacToe size="3"/>
      </div>
    );
  }
}

export default App;
