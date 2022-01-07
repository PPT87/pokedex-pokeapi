import React, { useState } from 'react'
import Axios from 'axios';
import './App.css'
import PokemonList from './PokemonList';

const App = () => {

  const [pokemonName, setPokemonName] = useState('')

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> console.log(response))
  }

  return (
    <div className="App">
      <div className='header-block'>
        <h1>Pokédex</h1>
        <div className='inputs'>
        <input 
          type='text' 
          placeholder='ex. Pikachu'
          onChange={(event) => {
            setPokemonName(event.target.value)
          }}
          
          />
        <button 
        type='submit'
        onClick={searchPokemon}
        >Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
