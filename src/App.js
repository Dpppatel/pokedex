import { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import Pokemons from "./Pokemons";
import PokeDetails from "./PokeDetails";

const App = () => {


    //Hold Errors
    const [hasErr, setErr] = useState('');
    
    //Hold all the data returned from the API
    const[runData, setData] = useState([]);
    
    //Hold user Selections
    const [selections, setSelections] = useState({pokedex: null, pokemon: null}); 

    //async function to get the data needed every time to render something
    const fetchData = async (url) =>{
        const response = await fetch(url);
        response
            .json()
            .then(response => setData(response))
            .catch(err => setErr(err));
    }

    //reset event handler will stay on the top always
    const reset = (event) => {
        setSelections({pokedex: null, pokemon: null});
    }    




    return (
        <div class="App">
            <button onClick={reset}>Back to Home</button>
            {hasErr? 'An Error Occured': null}
            {!hasErr && selections.pokedex === null && selections.pokemon === null? (<Pokedex fetch={fetchData} selections={selections} setSelections={setSelections} data={runData}/>):null}
            {!hasErr && selections.pokedex !== null && selections.pokemon === null? (<Pokemons fetch={fetchData} selections={selections} setSelections={setSelections} data={runData}/>): null}
            {!hasErr && selections.pokedex !== null && selections.pokemon !== null? (<PokeDetails fetch={fetchData} selections={selections} data={runData} setSelections={setSelections}/>): null}
        </div>
    )
}

export default App;


    //keep passing around the selecitons hook and and the fetchData. Use selection to make sure the visit is first


    //DONE: fetch from https://pokeapi.co/api/v2/pokedex/ for pokedex use the returnVal.url to get the details s much as needed


    //DONE: make a component to render the pokedex selector
    //DONE: make a component to render the single pokedex itself
    //DONE: make a componet for every single pokemon should have name, abilities, base stats, and type TODO: try this first this might be easier


    // handle both errors from the user and the api rejects for all the components and prevent the pokedex from rendering have all the errors be passed all the way back to the parent to handle them atleast the api one
    //user alerts?

    //DONE: store the user interactions

    // have a back button to move exactly one screen back. only visible after the pokedex has been selected.
