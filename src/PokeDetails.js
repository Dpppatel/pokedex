//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useEffect, useState } from "react";


//This file renders The Pokemon details upon call. It needs setErr(callback), setSelections(callback), selections(Object) must not have any keys null in order to run the file
const PokeDetails = ({pokedex, setErr, selections, setSelections}) => {

    //Hook to Keep the Data to render
    const [list, setList] = useState([]);
    const [more, setMore] = useState(false);

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            // console.log(selections.pokemon)
            return await pokedex.getPokemonByName(selections.pokemon)
                .then(res => setList([res.name, res.sprites.other['official-artwork'].front_default, res.types, res.abilities,  res.stats]))
                .catch(err => setErr(err));
        }
        fetchData();
    }, []);

    //Event Handler for Go Back Button
    const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }
   

    return(
        <>
            <button onClick={back} className="backButton">Previous Page</button>
            <table className="PokemonDetails" border=".5">
                <tr>
                    <th>{list[0]}</th>
                    <tr><img className="Picture" src={list[1]} alt={list[0]} height='300'width='auto'></img></tr> 
                    
                    <tr></tr>

                    <th>Types</th>
                    <tr>
                        <td>{list[2]?.map(el => {return (<td onClick={back}>{el.type.name}</td>)})}
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

                    {/* <th>Evolution Chain</th>
                    <tr>
                        <td>{list[4]?.map(el => {return (<td>{el.stat.name}: {el.base_stat}</td>)})}</td>
                    </tr> */}
                </tr>
            </table>
            <button onClick={back} disabled className="Details" title='Coming Soon'>More...</button>
        </>
    )

}
 // ANother Photo gallery <tr><img className="Picture" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${list[1]}.svg`} alt={selections.pokemon} height='300'width='auto'></img></tr>
export default PokeDetails;