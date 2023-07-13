

/**
 * Pokemon details renderer
 * @param  {function} fetch [An Anonymous function to fetch data from the Api.  required a string as a Parameter WARN: Calling the Function will change the contents of data]
 * @param  {Object} selections [Will hold the current selections of the user Two Keys: Pokedex, and Pokemon; both are set to null]
 * @param  {callBack} setSelections [Callback funciton to Change the selecitons Object. WARN: Do Not Add OR Remove the existing Keys, Only change them]
 * @param  {array of Objects} data [current data needed to rerender]
 *      Current Data(before calling fetch) for this Component should be:
 * List of Pokemons
 * @return  {Component} will return the data of the specified pokemon when called
 */

const PokeDetails = ({ fetch, selections, setSelections, data}) => {

    //Using the Pokemon name to pass into the link
    const url = `https://pokeapi.co/api/v2/pokemon/${selections.pokemon}/`;

    //Pass the url to fetchData
    fetch(url);

    //Event Handler for Go Back Button
    const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }

    return(
        <>
        <button onClick={back}>Previous Page</button>
        <table className="Pokemon Details">
            <tr>
                <th>Name</th>
                <td>{data.name}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{data.types.map(el => <p>{el.type.name}</p>)}</td>
            </tr>
            <tr>
                <th>Abilities</th>
                <td>{data.abilities.map(el => <p>{el.ability.name}</p>)}</td>
            </tr>
            <tr>
                <th>Base Stats</th>
                <td>{data.stats.map(el => <p>{el.base_stat}</p>)}</td>
            </tr>
            
        </table>
        </>
    )

}

export default PokeDetails;