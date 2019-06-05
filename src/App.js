import React, { Component } from 'react';
import PokemonPicker from './components/PokemonPicker';
import Pokemon from './components/Pokemon';
import './App.css';

class App extends Component {
  state = {
    selectedCharacter: 'dp6-90',
  };

  changeSelectedCharacter = id =>
    this.setState(() => ({ selectedCharacter: id }));

  render() {
    const { selectedCharacter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <PokemonPicker onCharacterSelect={this.changeSelectedCharacter} />
          {selectedCharacter}
          <Pokemon selectedCharacter={selectedCharacter} />
        </header>
      </div>
    );
  }
}

export default App;
