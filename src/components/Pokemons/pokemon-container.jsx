import { favoritePokemons } from '../../data/favoritePokemons';
import PokemonCard from './PokemonCard';

export const Pokemons = () => {
  return (
    <div className="mx-auto overflow-auto h-[75vh] w-[60%] grid grid-cols-2 gap-2">
    {
      favoritePokemons.map(name => <PokemonCard key={name} name={name} />)
    }
  </div>
  );
};
