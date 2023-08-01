import React, { useState , useEffect} from "react";
import Quiz from "./Quiz";
import {Pokedex} from 'pokeapi-js-wrapper';


const Gen = ({home}) => {
    const pokedex = new Pokedex({cacheImages:true}); 
    const [list, setList] = useState([]);
    const [hasErr, setErr] = useState('');
    const [selection, setSelections] = useState(''); 


    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            return await pokedex.getRegionsList()
                .then(res => setList(res.results))
                .catch(err => setErr(err));
        }
        fetchData();
    });





      //Event Handler to go back Exactly one stage.
      const back = (event) =>{
        home('');
    }

    if(hasErr) return<div>An Error Occurred</div>;
    return (
    <div>
         <button onClick={back} className="backButton">Previous Page</button>
        
        {selection? <Quiz pokedex={pokedex} selection={selection} />: <div className="pokedexes">
            {list.map(generation => {  
                return (<div onClick={() => setSelections(generation.name)} className="pokedexName" key={generation.name}><li>{generation.name}</li></div>);
            })}
        </div> }
    </div>)
}

export default Gen;