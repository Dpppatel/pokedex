import React, {useEffect, useState} from "react";

const Quiz = ({pokedex, selection}) => {
    const [list, setList] = useState([]);
    const [hasErr, setErr] = useState('');
    // const [input, setinput] = useState(''); 

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            return await pokedex.getRegionByName(selection)
                .then((res) => moreData(res.pokedexes[1].name))
                .catch(err => setErr(err));
        }
        const moreData = async (inp) =>{
            await pokedex.getPokedexByName(inp)
            .then(res => setList(res.pokemon_entries))
            .catch(err => setErr(err))
        }
        fetchData();
    });

    if(hasErr) {
        return(<div>An Error Occurred.</div>);
    }

    return (
    <div>
        <h2>There are {list.length} pokemons in {selection} region.  Can you guess all of them?</h2>
        <div>{list.map((el, i) => <li key={i}>{el.pokemon_species.name}</li>)}</div>
    </div>)
}

export default Quiz;