import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonRow = ({ name1, name2 }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
      <PokemonCard name={name1} />
      <PokemonCard name={name2} />
    </div>
  );
};

export default PokemonRow;
