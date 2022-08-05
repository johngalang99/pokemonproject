import React from 'react';
import { favoritePokemons } from '../../data/favoritePokemons';
import PokemonRow from './PokemonRow';

const Pokemons = () => {
  const [
    poke1,
    poke2,
    poke3,
    poke4,
    poke5,
    poke6,
    poke7,
    poke8,
    poke9,
    poke10,
  ] = favoritePokemons;

  return (
    <div className="flex flex-col items-center overflow-scroll">
      <PokemonRow name1={poke1} name2={poke2} />
      <PokemonRow name1={poke3} name2={poke4} />
      <PokemonRow name1={poke5} name2={poke6} />
      <PokemonRow name1={poke7} name2={poke8} />
      <PokemonRow name1={poke9} name2={poke10} />
    </div>
  );
};

export default Pokemons;
