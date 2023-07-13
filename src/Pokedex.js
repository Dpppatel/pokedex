

/**
 * Pokedex renderer
 * @param  {function} fetch [An Anonymous function to fetch data from the Api. required a string as a Parameter WARN: Calling the Function will change the contents of data]
 * @param  {callBack} setSelections [Callback funciton to Change the selecitons Object. Two Keys: Pokedex, and Pokemon; both are set to null.
 *  WARN: Do Not Add OR Remove the existing Keys, Only change them]
 * @param  {array of Objects} data [current data needed to rerender]
 *        Current data(before calling fetch) for this file should be: []
 * @return  {Component} Will return the list of Pokedex when called
 */

const Pokedex = ({fetch, setSelections, data}) => {

    //Use setSelections to Make sure the selections are what they need to be entering this component. No mattter the way
    setSelections({Pokedex: null, pokemon: null});

    //Callback to fetchData to get the information
    fetch("https://pokeapi.co/api/v2/pokedex/");

    //event handler to select pokedex. This component does not need GO Back button since this will be the first component to be rendered
    const selectedPokedex = (name) => {
        setSelections({pokedex: name, pokemon: null});
    }

    return(
        <>
            {data.results.map(pokedex => {  
                return (<button onClick={() => selectedPokedex(pokedex.name)} className="pokedexName">{pokedex.name}</button>);
            })}
        </>
    );
    
}

export default Pokedex;