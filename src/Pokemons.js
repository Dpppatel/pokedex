//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useEffect, useState } from "react";

//This file renders The Pokemons upon call. It needs setErr(callback), setSelections(callback), selections(object), selections.pokedex must not be null for the file to run
const Pokemons = ({pokedex, setErr, selections, setSelections}) =>{


    //Hook to hold data to display
    const [list, setList] = useState([]);

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            return await pokedex.getPokedexByName(selections.pokedex)
                .then(res => setList(res.pokemon_entries))
                .catch(err => setErr(err));
        }
        fetchData();
    })
    

    //Event Handler when the user Selects a pokemon
    const selectedPokemon = (name) => {
        setSelections({...selections, pokemon: name.split('/').slice(-2, -1)[0]});
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
            {list.map(pokemons => {          

                return (<div onClick={() => selectedPokemon(pokemons.pokemon_species.url)} className="pokemonName" key={pokemons.pokemon_species.name}><li>{pokemons.pokemon_species.name}</li></div>);
            })}
        </div>
        </>
    );
}

export default Pokemons;
//<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.pokemon_species.url.split('/').slice(-2, -1)[0]}.png`} alt='pokemon'></img>