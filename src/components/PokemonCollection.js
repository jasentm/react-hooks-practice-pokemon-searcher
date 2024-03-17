import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map(singlePokemon => {
        return <PokemonCard 
        name={singlePokemon.name} 
        HP ={singlePokemon.hp} 
        sprites={singlePokemon.sprites}
        key={singlePokemon.id}
        />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
