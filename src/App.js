import React, { useState } from 'react'
import Axios from 'axios';
import './App.css'
import PokemonList from './PokemonList';

const App = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState({
    img: '',
    name: '',
    type: '',
    hp: '',
    attack: '',
    defense: '',
  })

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
      setPokemon({
        img: response.data.sprites.front_default,
        name: response.data.forms[0].name,
        type: response.data.types[0].type.name,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
      })
    })
  }

    return (
    <>
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
        >
          Search
        </button>
        </div>
    </div>
        <div className='display-block'>
          <img src={pokemon.img} alt='picture of pokemon'/>
          <h1>{pokemon.name}</h1>
        </div>
      </div>
    </>
  );
        }

export default App;
