//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useState } from "react";
const  _Pokedex =  require('pokeapi-js-wrapper');
const pokedex = new _Pokedex.Pokedex();

//This file renders The Pokemon details upon call. It needs setErr(callback), setSelections(callback), selections(Object) must not have any keys null in order to run the file
const PokeDetails = ({setErr, selections, setSelections}) => {

    //Hook to Keep the Data to render
    const [list, setList] = useState([]);

    //Async function to fetch data from the Wrapper
    const fetchData = async () => {
        return await pokedex.getPokemonByName(selections.pokemon)
            .then(res => setList([res.name, res.sprites.other['official-artwork'].front_default, res.types, res.abilities,  res.stats]))
            .catch(err => setErr(err));
    }
    fetchData();

    //Event Handler for Go Back Button
    const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }
   
    return(
        <>
            <button onClick={back} className="backButton">Previous Page</button>
            <table className="PokemonDetails" border=".5">
                <thead></thead>
                <tbody></tbody>
                <tfoot></tfoot>
                <tr>
                    <th>{selections.pokemon}</th>
                    <tr><img className="Picture" src={list[1]} alt={selections.pokemon} height='300'width='auto'></img></tr> 
                    
                    <tr></tr>

                    <th>Types</th>
                    <tr>
                        <td>{list[2]?.map(el => {return (<td>{el.type.name}</td>)})}
                        </td>
                    </tr>
                    
                    <th>Abilities</th>
                    <tr>
                        <td>{list[3]?.map(el => {return (<td>{el.ability.name}</td>)})}
                        </td>
                    </tr>

                    <th>Stats</th>
                    <tr>
                        <td>{list[4]?.map(el => {return (<td>{el.stat.name}: {el.base_stat}</td>)})}</td>
                    </tr>
                </tr>
            </table>
            <button onClick={back} disabled className="Details" title='Coming Soon'>More...</button>
        </>
        
    )

}
 // ANother Photo gallery <tr><img className="Picture" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${list[1]}.svg`} alt={selections.pokemon} height='300'width='auto'></img></tr>
export default PokeDetails;