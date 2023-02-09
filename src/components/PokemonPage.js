import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {

  //fetch request...pass that data down to PokemonCollection as a prop
  //in PokemonCollection..map that data on PokemonCards
  //in PokemonCard...create the card. but also create state and use that to toggle the card.
  // in Search...we're going to pass down a state from PokemonPage so we can filter up there
  //wire up PokemonForm so we can submit a new Pokemon. Needs to render to the page and POST

      const [pokemonData, setPokemonData] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");

      useEffect(() => {
        fetch("http://localhost:3001/pokemon")
          .then((r) => r.json())
          .then(setPokemonData);
      }, []);

      function addPokemon(newPokemon) {
        setPokemonData([...pokemonData, newPokemon])
      }

      const filteredPokemonData = pokemonData.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
      );


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {addPokemon}/>
      <br />
      <Search onChange = {setSearchTerm} searchTerm = {searchTerm}/>
      <br />
      <PokemonCollection pokemonData = {filteredPokemonData}/>
    </Container>
  );
}

export default PokemonPage;