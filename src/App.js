import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Pokemons from "./Pokemons";
import PokeDetails from "./PokeDetails";

const App = () => {

    //Hold Errors
    const [hasErr, setErr] = useState('');
    //Keep all the data returned from the APi
    const[runData, setData] = useState([]);
    //user Selections
    const [selections, setSelections] = useState({pokedex: null, pokemon: null}); //3 stages make sure they are linked to avoid and unwanted changes

    const fetchData = async (url) =>{
        const response = await fetch(url);
        response
            .json()
            .then(response => setData(response))
            .catch(err => setErr(err));
    }

    



    //keep passing around the selecitons hook and and the fetchData. Use selection to make sure the visit is first


    //fetch from https://pokeapi.co/api/v2/pokedex/ for pokedex use the returnVal.url to get the details s much as needed


    //make a component to render the pokedex selector
    //make a component to render the single pokedex itself
    //make a componet for every single pokemon should have name, abilities, base stats, and type TODO: try this first this might be easier


    // handle both errors from the user and the api rejects for all the components and prevent the pokedex from rendering have all the errors be passed all the way back to the parent to handle them atleast the api one
    //user alerts?

    //store the user interactions

    // have a back button to move exactly one screen back. only visible after the pokedex has been selected.

    return (
        <div class="App">
            {hasErr? alert('An Error Occured'): null}
            {/* add as needed*/}
        </div>
    )
}

export default App;