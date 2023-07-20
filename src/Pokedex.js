

/**
 * Pokedex renderer
 * @param  {function} fetch [An Anonymous function to fetch data from the Api. required a string as a Parameter WARN: Calling the Function will change the contents of data]
 * @param  {callBack} setSelections [Callback funciton to Change the selecitons Object. Two Keys: Pokedex, and Pokemon; both are set to null.
 *  WARN: Do Not Add OR Remove the existing Keys, Only change them]
 * @param  {array of Objects} data [current data needed to rerender]
 *        Current data(before calling fetch) for this file should be: []
 * @return  {Component} Will return the list of Pokedex when called
 */

import { useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

const PokedexList = ({setErr, setSelections}) => {

    const [list, setList] = useState([]);

    const fetchData = async () => {
        return await pokedex.getPokedexsList()
            .then(res => setList(res.results))
            .catch(err => setErr(err));
    }

    fetchData();

    //Use setSelections to Make sure the selections are what they need to be entering this component. No mattter the way
    const selectedPokedex = (name) => {
            setSelections({pokedex: name, pokemon: null});
    }
    //Callback to fetchData to get the information
    
        

    //event handler to select pokedex. This component does not need GO Back button since this will be the first component to be rendered
    
    return(
        <div className="pokedexes">
            {list.map(pokedex => {  
                return (<a onClick={() => selectedPokedex(pokedex.name)} className="pokedexName">{pokedex.name}</a>);
            })}
        </div>
    );  
}

export default PokedexList;