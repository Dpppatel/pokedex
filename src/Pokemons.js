

/**
 * Pokemons List renderer
 * @param  {function} fetch [An Anonymous function to fetch data from the Api.  required a string as a Parameter WARN: Calling the Function will change the contents of data]
 * @param  {Object} selections [Will hold the current selections of the user Two Keys: Pokedex, and Pokemon; both are set to null]
 * @param  {callBack} setSelections [Callback funciton to Change the selecitons Object. WARN: Do Not Add OR Remove the existing Keys, Only change them]
 * @param  {array of Objects} data [current data needed to rerender]
 *      Current Data(before calling fetch) for this Component should be:
 * list of Pokedexes
 * @return {Component} Will return the List of Pokemons when called
 */

const Pokemons = ({fetch, selections, setSelections, data}) =>{
    
    //Use the setSelecitons to make sure the selections are what they need to be entering this Component
    setSelections({...selections, pokemon: null});

    //Using the pokedex's name to get the url that we need to go to
    let url = '';
    data.results.map(el => {
        if(el.name === selections.pokedex){
            url =  el.url;
        }
    });

    //Using a callback and Passing the url to fetchData
    fetch(url);
    
    //Event Handler when the user Selects a pokemon
     const selectedPokemon = (name) => {
        setSelections({...selections, pokemon: name});
     }

     //Event Handler to go back Exactly one slide.
     const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }
 
     return(
         <>
         <button onClick={back}>Previous Page</button>
            {data.pokemon_entries.map(pokemons=> {
                 
                return (<button onClick={() => selectedPokemon(pokemons.pokemon_species.name)} className="pokedexName">{pokemons.pokemon_species.name}</button>);
            })}
         </>
     );
}

export default Pokemons;