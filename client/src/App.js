import React, { Component } from 'react';
import logo from './raspberry-pi.svg';
import './App.css';
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Main />

        </header>
      </div>
    );
  }
}

export default App;
