//Js-Wrapper used visit https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/README.md  for info 

import { useEffect, useState } from "react";



//This file renders The Pokemon details upon call. It needs setErr(callback), setSelections(callback), selections(Object) must not have any keys null in order to run the file
const PokeDetails = ({pokedex, setErr, selections, setSelections}) => {

    //Hook to Keep the Data to render
    const [list, setList] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    //Async function to fetch data from the Wrapper
    useEffect(()=>{
        const fetchData = async () => {
            // console.log(selections.pokemon)
            return await pokedex.getPokemonByName(selections.pokemon)
                .then(res => setList([res.name, [res.sprites.other['official-artwork'].front_default, res.sprites.other['official-artwork'].front_shiny], res.types, res.abilities,  res.stats]))
                .catch(err => setErr(err));
        }
        fetchData();
    });

    //Event Handler for Go Back Button
    const back = (event) =>{
        setSelections({...selections, pokemon: null});
    }
   
    const handleImageClick = (index) => {
        setCurrentImage(index);
    };
    
    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % list[1]?.length);
    };
     
    return(
        <>
            <button onClick={back} className="backButton">Previous Page</button>
            <table className="PokemonDetails" border=".5">
                <tr>
                    <th>{list[0]}</th>
                    <tr></tr> 
                    
                    <tr>{list[1]?.map((image, i) => (
                        <div id='image' title='click to see a different version'style={{ display: currentImage === i ? "inline" : "none" }}>
                            <img
                            key={i}
                            src={image}
                            className="image"
                            alt={list[0]}
                            onClick={() => {handleImageClick(i); handleNextImage()}}/>
                            <p>{(i===0)? 'normal':'shiny'}</p></div>
                        ))}
                    </tr>

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
            <button onClick={back} disabled className="Details" title='Soon...'>More...</button>
        </>
    )

}
export default PokeDetails;