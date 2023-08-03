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
            return await pokedex.getGenerationsList()
                .then(res => setList(res.results))
                .catch(err => setErr(err));
        }
        fetchData();
    });





      //Event Handler to go back Exactly one stage.
      const back = (event) =>{
        home('');
    }

    if(hasErr) {return<div>An Error Occurred</div>};

    return (
    <div>
         
        
        {selection? <Quiz pokedex={pokedex} selection={selection} />: <><button onClick={back} className="backButton">Previous Page</button><div className="pokedexes">
            {list.map((generation, i) => {  
                return (<div onClick={() => setSelections(generation.name)} className="pokedexName" key={i+1}><li>{`Gen ${i+1}`}</li></div>);
            })}
        </div></> }
    </div>)
}

export default Gen;