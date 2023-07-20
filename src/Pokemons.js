//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

//This file renders The Pokemons upon call. It needs setErr(callback), setSelections(callback), selections(object), selections.pokedex must not be null for the file to run
const Pokemons = ({setErr, selections, setSelections}) =>{


    //Hook to hold data to display
    const [list, setList] = useState([]);

    //Async function to fetch data from the Wrapper
    const fetchData = async () => {
        return await pokedex.getPokedexByName(selections.pokedex)
            .then(res => setList(res.pokemon_entries))
            .catch(err => setErr(err));
    }
    fetchData();
    

    //Event Handler when the user Selects a pokemon
     const selectedPokemon = (name) => {
        setSelections({...selections, pokemon: name});
     }

     //Event Handler to go back Exactly one stage.
     const back = (event) =>{
        setSelections({pokedex: null, pokemon: null});
    }
 
     return(
         <>
            <button onClick={back} className="backButton">Previous Page</button>

            <h2>Select a Pokemon</h2>
            
            <div className="pokemons">
                {list.map(pokemons=> {
                 
                return (<div onClick={() => selectedPokemon(pokemons.pokemon_species.name)} className="pokemonName"><li>{pokemons.pokemon_species.name}</li></div>);
                })}
            </div>
         </>
     );
}

export default Pokemons;