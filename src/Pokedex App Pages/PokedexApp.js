import { useState, useRef } from "react";
import PokedexList from "./Pokedex";
import Pokemons from "./Pokemons";
import PokeDetails from "./PokeDetails";
import {Pokedex} from 'pokeapi-js-wrapper';


//This file controls what should be rendered at what point And keep track of where the user is
const PokedexApp = ({home}) => {
    const pokedex = useRef(new Pokedex({cacheImages:true})); 
    //Hold Errors
    const [hasErr, setErr] = useState('');
    
    //Hold user Selections
    const [selections, setSelections] = useState({pokedex: null, pokemon: null}); 

    return (
        <div className="App">
            

            {hasErr? 'An Error Occured. Please Refresh': null}

            <div data-testid="Pokedexes">{(!hasErr && (selections.pokedex === null) && (selections.pokemon === null))? (<><PokedexList pokedex={pokedex.current} setErr={setErr} selections={selections} setSelections={setSelections} home={home} /></>):null}</div>
            
            <div data-testid="Pokemons">{(!hasErr && (selections.pokedex !== null) && (selections.pokemon === null))? (<Pokemons pokedex={pokedex.current} setErr={setErr} selections={selections} setSelections={setSelections} />): null}</div>
            
            <div data-testid="Pokedetails">{(!hasErr && (selections.pokedex !== null) && (selections.pokemon !== null))? (<PokeDetails pokedex={pokedex.current} setErr={setErr} selections={selections}  setSelections={setSelections}/>): null}</div>
        </div>
    )
}

export default PokedexApp;