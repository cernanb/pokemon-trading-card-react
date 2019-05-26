import React, { Component } from 'react';
import CharacterPicker from './components/CharacterPicker';
import './App.css';

class App extends Component {
  state = {
    selectedCharacter: 'dp6-90',
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
          <CharacterPicker onCharacterSelect={this.changeSelectedCharacter} />
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
