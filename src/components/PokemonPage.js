import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => {
      if(res.ok){
        return res.json()
      }else {
        return console.error("Something went wrong with your GET fetch request...")
      }
    })
    .then (data => setPokemon(data))
  }, [])
  
  const [search, setSearch] = useState("")
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredPokemon = pokemon.filter(singlePokemon => {
    return (singlePokemon.name.includes(search.toLowerCase()))
  })
 
  const addNewPokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
