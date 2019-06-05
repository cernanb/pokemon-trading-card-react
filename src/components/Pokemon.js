import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';

class Pokemon extends Component {
  state = { isLoading: false, loadedCharacter: {} };

  componentDidMount() {
    this.getPokemonData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { selectedCharacter } = this.props;
    const { loadedCharacter, isLoading } = this.state;
    return (
      nextProps.selectedCharacter !== selectedCharacter ||
      nextState.loadedCharacter.id !== loadedCharacter.id ||
      nextState.isLoading !== isLoading
    );
  }

  componentDidUpdate(prevProps) {
    const { selectedCharacter } = this.props;
    if (prevProps.selectedCharacter !== selectedCharacter) {
      this.getPokemonData();
    }
  }

  getPokemonData = async () => {
    const { selectedCharacter } = this.props;
    this.setState({ isLoading: true });
    const res = await fetch(
      `https://api.pokemontcg.io/v1/cards/${selectedCharacter}`
    );

    const { card } = await res.json();
    this.setState({ loadedCharacter: card, isLoading: false });
  };

  render() {
    let content = <p>Loading pokemon info...</p>;
    const { loadedCharacter, isLoading } = this.state;
    if (!isLoading && loadedCharacter.id) {
      content = (
        <Summary
          name={loadedCharacter.name}
          imageUrl={loadedCharacter.imageUrl}
        />
      );
    }

    return content;
  }
}

export default Pokemon;

Pokemon.propTypes = {
  selectedCharacter: PropTypes.string,
};
