import React, { useState } from 'react'
import Axios from 'axios';
import './App.css'

const App = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [displayPokemon, setDisplayPokemon] = useState(false)
  const [pokemon, setPokemon] = useState({
    img: '',
    name: '',
    type: '',
    hp: '',
    attack: '',
    defense: '',
  })

  const handleChange = e => {
    setPokemonName(e.target.value);
  };

  const searchPokemon = e => {
    e.preventDefault()
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
      setPokemon({
        frontImg: response.data.sprites.front_default,
        backImg: response.data.sprites.back_default,
        name: response.data.forms[0].name,
        type: response.data.types[0].type.name,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
      })
      setDisplayPokemon(true)
    })
  }

    return (
    <>
    <div className="App">
      <form className='header-block'>
        <h1>Pokédex</h1>
        <div className='inputs'>
        <input 
          value={pokemonName}
          onChange={handleChange}
          placeholder='ex. pikachu'
          />
        <button 
        type='submit'
        onClick={searchPokemon}
        >
          Search
        </button>
        </div>
    </form>
        <div className='display-block'> 
        {!displayPokemon ? (
        <h1>Search a pokémon to start!</h1>
        ) : (
          <>
          <span><img src={pokemon.frontImg} alt='front image of pokemon'/>  <img src={pokemon.backImg} alt= 'back image of pokemon' /></span>
            <h1>Name: {pokemon.name}</h1>
            <h2>Type: {pokemon.type}</h2>
            <h2>HP: {pokemon.hp}</h2>
            <h2>Attack: {pokemon.attack}</h2>
            <h2>Defense: {pokemon.defense}</h2>

          </>
        )}
        </div>
      </div>
    </>
  );
        }

export default App;
