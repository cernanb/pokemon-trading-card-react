import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    selectedCharacter: 1,
    evolved: false,
    destroyed: false,
  };

  toggleEvolved = () =>
    this.setState(prevState => ({ evolved: !prevState.evolved }));

  changeSelectedCharacter = id =>
    this.setState(() => ({ selectedCharacter: id }));

  render() {
    const { selectedCharacter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {selectedCharacter}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
