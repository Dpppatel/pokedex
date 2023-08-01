//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useState, useEffect } from "react";


//This file renders The pokedexList upon call. Only needs setErr(callback) and setSelections(callback) in order to run
const PokedexList = ({pokedex, setErr, setSelections, home}) => {

    //hook to save Data to render
    const [list, setList] = useState([]);

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
        return await pokedex.getPokedexsList()
            .then(res => setList(res.results))
            .catch(err => setErr(err));
        } 
        fetchData();
    })

   //event handler to select pokedex.
    const selectedPokedex = (name) => {
        setSelections({pokedex: name, pokemon: null});
    }

        //Event Handler to go back Exactly one stage.
        const back = (event) =>{
            home('');
        }
   

    return(
        <>
         <button onClick={back} className="backButton">Previous Page</button>
            <h2>Select a Pokedex. {list.length} items</h2>
            <div className="pokedexes">
                {list.map(pokedex => {  
                    return (<div onClick={() => selectedPokedex(pokedex.name)} className="pokedexName" key={pokedex.name}><li>{pokedex.name}</li></div>);
                })}
            </div>
        </>
    );  
}

export default PokedexList;