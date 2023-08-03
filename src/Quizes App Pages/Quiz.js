import React, {useEffect, useState} from "react";
import Images from './Images'

const Quiz = ({pokedex, selection}) => {
    const [list, setList] = useState([]);
    const [track, setTrack] = useState([]);
    const [hasErr, setErr] = useState('');
    const [input, setInput] = useState(''); 
    const [score, setScore] = useState(0);

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            return await pokedex.getGenerationByName(selection)
                .then((res) => setList(res.pokemon_species))
                .catch(err => setErr(err));
        }
        fetchData()
    });

    const change = (event) =>{
        setInput(event.target.value)
        if(list.find(el => el.pokemon_species.name === event.target.value.toLowerCase()) && !track.includes(event.target.value)){
            setList(list.filter(el => el !== event.target.value));
            setScore(score+ 1);
            setTrack([...track, event.target.value]);
            setInput('')
        }
    }

    if(track.length === list.length){
        return(<div>Congratulations!</div>)
    }
    if(hasErr) {
        return(<div>An Error Occurred.</div>);
    }

    return (
    <div className="quiz">
        <h2>There are {list.length} pokemons in {selection} region.  Can you guess'em all?</h2><h4>Your score: {`${score}/${list.length}`}</h4>
        <input  className='searchbar' type="text" placeholder="Search for a Pokemon" onChange={change} value={input}/>
        <div className="pokemonsImage">{list.map((el,i) => (<img key={i} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.pokemon_species.url.split('/').slice(-2, -1).slice(0)}.png`} />))}
        </div>
    </div>)
}

export default Quiz;