

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
import { useEffect, useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

const PokeDetails = ({setErr, selections, setSelections}) => {

    //Using the Pokemon name to pass into the link

    //Pass the url to fetchData
    const [list, setList] = useState([]);

    const fetchData = async () => {
        return await pokedex.getPokemonByName(selections.pokemon)
            .then(res => setList([res.name, res.id, res.types, res.abilities,  res.stats]))
            .catch(err => setErr(err));
    }
    //PROBLEM: Doesnt wait for all the data to return and directly sends it to rendering. will work if everything other than name is commented out then resored again after rendering.

    fetchData();

    //Event Handler for Go Back Button
    const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }
   
    return(
        <>
        <button onClick={back} className="backButton">Previous Page</button>
        <table className="pokemonDetails" border="1">
            <tr>
                <th>Image</th>
                <td><img className="Picture" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${list[1]}.svg`} height='300'width='auto'></img></td>
            </tr>
            <tr>
                <th>Name</th>
                <td>{list[0]}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{list[2].map(el => <td>{el.type.name}</td>)}</td>
            </tr>
            <tr>
                <th>Abilities</th>
                <td>{list[3].map(el => <td>{el.ability.name}</td>)}</td>
            </tr>
            <tr>
                <th>Base Stats</th>
                <td>{list[4].map(el => <td>{el.stat.name}: {el.base_stat}</td>)}</td>
            </tr>
        </table>
        </>
    )

}

export default PokeDetails;