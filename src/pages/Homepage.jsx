import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Pokemons } from '../components/Pokemons/pokemon-container'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
};

export default Homepage;
