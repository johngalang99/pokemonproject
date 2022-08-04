import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pokemons from '../components/Pokemons';

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
};

export default Homepage;
