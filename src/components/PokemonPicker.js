import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonPicker extends Component {
  state = { isLoading: false, pokemon: [] };

  componentDidMount() {
    const getPokemonCards = async () => {
      const res = await fetch(`https://api.pokemontcg.io/v1/cards`);
      const { cards } = await res.json();
      this.setState({
        pokemon: cards
          .slice(0, 20)
          .map(card => ({ id: card.id, name: card.name })),
      });
    };

    getPokemonCards();
  }

  render() {
    const content = <p>Loading pokemon...</p>;
    const { isLoading, pokemon } = this.state;
    const { onCharacterSelect } = this.props;
    if (!isLoading && pokemon.length > 0) {
      return (
        <select onChange={e => onCharacterSelect(e.target.value)}>
          {pokemon.map(card => (
            <option key={card.id} value={card.id}>
              {card.name}
            </option>
          ))}
        </select>
      );
    }
    return content;
  }
}

PokemonPicker.propTypes = {
  onCharacterSelect: PropTypes.func,
};

export default PokemonPicker;
