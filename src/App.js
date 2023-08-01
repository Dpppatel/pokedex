import React, { useState } from "react";
import PokedexApp from "./Pokedex App Pages/PokedexApp";
import Gen from "./Quizes App Pages/Gen";


const App = () => {
    const [userDesc, setUserDesc] = useState('');

    const reset = (event) => {
        setUserDesc('');
    }   

    if(!userDesc){
        return (
            <div>
                <header>
                    <img className="PokemonLogo" src="/pokemonLogo.png" height="70"alt="Pokemon logo" onClick={reset}/>
                    <input disabled className='searchbar' type="text" placeholder="Search for a Pokemon"/>
                    <button onClick={reset} className="Home">Back to Home</button>
                </header>
                <img className='trial' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'/>
                <h2>What Would you like to do?</h2>
                <div className='pokedexName' onClick={()=>setUserDesc('pokedex')}><li>Go to Pokedexes</li></div>
                <div className='pokedexName' onClick={()=>setUserDesc('quiz')}><li>Take a Quiz!</li></div>
            </div>)
    }
    return(<>
            <header>
                <img className="PokemonLogo" src="/pokemonLogo.png" height="70"alt="Pokemon logo" onClick={reset}/>
                <input disabled className='searchbar' type="text" placeholder="Search for a Pokemon"/>
                <button onClick={reset} className="Home">Back to Home</button>
            </header>
       
        {userDesc==='pokedex'? <PokedexApp home={setUserDesc}/>:null}
        {userDesc==='quiz'? <Gen home={setUserDesc}/>: null}
    </>)
}

export default App;