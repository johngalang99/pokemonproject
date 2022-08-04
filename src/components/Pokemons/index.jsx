import React from 'react';
import PokemonRow from './PokemonRow';

const Pokemons = () => {
  return (
    <div className="flex flex-col items-center overflow-scroll">
      <PokemonRow name1={'charizard'} name2={'pidgeot'} />
      <PokemonRow name1={'lapras'} name2={'krabby'} />
      <PokemonRow name1={'pikachu'} name2={'alakazam'} />
      <PokemonRow name1={'kabutops'} name2={'snorlax'} />
      <PokemonRow name1={'mewtwo'} name2={'dragonite'} />
    </div>
  );
};

export default Pokemons;
