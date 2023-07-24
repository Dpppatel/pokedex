//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

//This file renders The pokedexList upon call. Only needs setErr(callback) and setSelections(callback) in order to run
const PokedexList = ({setErr, setSelections}) => {

    //hook to save Data to render
    const [list, setList] = useState([]);

    //Async function to fetch data from the Wrapper
    const fetchData = async () => {
        return await pokedex.getPokedexsList()
            .then(res => setList(res.results))
            .catch(err => setErr(err));
    }
    fetchData();

   //event handler to select pokedex. This component does not need GO Back button since this will be the first component to be rendered
    const selectedPokedex = (name) => {
            setSelections({pokedex: name, pokemon: null});
    }
   

    return(
        <>
        <h2>Select a Pokedex</h2>
        <div className="pokedexes">
            {list.map(pokedex => {  
                return (<div onClick={() => selectedPokedex(pokedex.name)} className="pokedexName" key={pokedex.name}><li>{pokedex.name}</li></div>);
            })}
        </div>
        </>
    );  
}

export default PokedexList;