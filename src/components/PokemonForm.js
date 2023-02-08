import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

    const [name, setName] = useState('');
    const [hp, setHP] = useState('');
    const [frontURL, setFrontUrl] = useState('');
    const [backURL, setBackUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = { name, hp, frontURL, backURL };

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPokemon)
      }).then(() => {console.log('new Pokemon added successfully');
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHP(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
