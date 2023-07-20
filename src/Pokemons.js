

/**
 * Pokemons List renderer
 * @param  {function} fetch [An Anonymous function to fetch data from the Api.  required a string as a Parameter WARN: Calling the Function will change the contents of data]-
 * @param  {Object} selections [Will hold the current selections of the user Two Keys: Pokedex, and Pokemon; both are set to null]
 * @param  {callBack} setSelections [Callback funciton to Change the selecitons Object. WARN: Do Not Add OR Remove the existing Keys, Only change them]
 * @param  {array of Objects} data [current data needed to rerender]
 *      Current Data(before calling fetch) for this Component should be:
 * list of Pokedexes
 * @return {Component} Will return the List of Pokemons when called
 */
import { useEffect, useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

const Pokemons = ({setErr, selections, setSelections}) =>{
    
    //Use the setSelecitons to make sure the selections are what they need to be entering this Component
    

    //Using the pokedex's name to get the url that we need to go to


    //Using a callback and Passing the url to fetchData
    const [list, setList] = useState([]);

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

     //Event Handler to go back Exactly one slide.
     const back = (event) =>{
        setSelections({pokedex: null, pokemon: null});
        
    }
 
     return(
         <>
            <button onClick={back} className="backButton">Previous Page</button>
            <div className="pokemons">
                {list.map(pokemons=> {
                 
                return (<li onClick={() => selectedPokemon(pokemons.pokemon_species.name)} className="pokemonName">{pokemons.pokemon_species.name}</li>);
                })}
            </div>
         </>
     );
}

export default Pokemons;