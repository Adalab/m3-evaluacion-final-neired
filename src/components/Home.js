import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserInput, userInput, characters} = props;

  return (
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
      />
      <CharacterList
        characters={characters}
        userInput={userInput}
      />
    </main>
  );
};

Home.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired
};

export default Home;