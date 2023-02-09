import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {

    const cards = pokemonData.map((poke) => (
      <PokemonCard 
        key={poke.id} 
        name = {poke.name}
        hp = {poke.hp}
        sprites = {poke.sprites}
      />
    ));

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>    
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;