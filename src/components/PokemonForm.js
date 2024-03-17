import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {
  const [form, setForm] = useState({
    }
  )
  
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: form.name,
        hp: form.hp,
        sprites: {
          front: form.frontUrl,
          back: form.backUrl
        },
      })
    })
    .then(res => {
      if(res.ok){
        return (res.json())
      }else{
        return console.error("Something went wrong with your POST request")
      }
    })
    .then(newPokemon => addNewPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleForm}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleForm}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
