import { useQuery } from '@apollo/client';
import React from 'react';
import { SINGLE_POKEMON_QUERY } from '../../graphql/GetSinglePokemon';

const PokemonCard = ({ name }) => {
  const { data, loading, error } = useQuery(SINGLE_POKEMON_QUERY, {
    variables: {
      name,
    },
  });

  if (loading) return null;
  if (error) return <pre>{error.message}</pre>;

  const { pokemon } = data;

  return (
    <div className="border m-3 p-2 md:p-5 flex gap-3 md:gap-10 w-[350px] md:w-[500px]">
      <div className="flex items-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-28 h-28 md:w-40 md:h-40"
        />
      </div>
      <div>
        <p>{`# ${pokemon.number}`}</p>
        <p>{pokemon.name}</p>
        <p>{`Classification: ${pokemon.classification}`}</p>
        <p>{`Types: ${pokemon.types}`}</p>
        <p>{`Height: ${pokemon.height.minimum} - ${pokemon.height.maximum}`}</p>
        <p>{`Weight: ${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
