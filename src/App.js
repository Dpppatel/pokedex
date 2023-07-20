import { useState } from "react";
import PokedexList from "./Pokedex";
import Pokemons from "./Pokemons";
import PokeDetails from "./PokeDetails";


//This file controls what should be rendered at what point And keep track of where the user is
const App = () => {

    //Hold Errors
    const [hasErr, setErr] = useState('');
    
    //Hold user Selections
    const [selections, setSelections] = useState({pokedex: null, pokemon: null}); 

 

    //reset event handler will stay on the top always
    const reset = (event) => {
        setSelections({pokedex: null, pokemon: null});
    }    

    return (
        <div className="App">
            <header>
                <img className="PokemonLogo" src="/pokemonLogo.png" height="70"alt="Pokemon logo" onClick={reset}/>
                
                <button onClick={reset} className="Home">Back to Home</button>
            </header>

            {hasErr? alert('An Error Occured'): null}

            {(!hasErr && (selections.pokedex === null) && (selections.pokemon === null))? (<PokedexList setErr={setErr} selections={selections} setSelections={setSelections} />):null}
            
            <div>{(!hasErr && (selections.pokedex !== null) && (selections.pokemon === null))? (<Pokemons setErr={setErr} selections={selections} setSelections={setSelections} />): null}</div>
            
            <div>{(!hasErr && (selections.pokedex !== null) && (selections.pokemon !== null))? (<PokeDetails setErr={setErr} selections={selections}  setSelections={setSelections}/>): null}</div>
        </div>
    )
}

export default App;


    //keep passing around the selecitons hook and and the fetchData. Use selection to make sure the visit is first


    //DONE: fetch from https://pokeapi.co/api/v2/pokedex/ for pokedex use the returnVal.url to get the details s much as needed


    //DONE: make a component to render the pokedex selector
    //DONE: make a component to render the single pokedex itself
    //DONE: make a componet for every single pokemon should have name, abilities, base stats, and type TODO: try this first this might be easier


    //DONE: handle both errors from the user and the api rejects for all the components and prevent the pokedex from rendering have all the errors be passed all the way back to the parent to handle them atleast the api one
    //user alerts?

    //DONE: store the user interactions

    //DONE: have a back button to move exactly one screen back. only visible after the pokedex has been selected.
