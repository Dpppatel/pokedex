


const MainMenu = ({fetch, selections, data}) => {
    //add .results after fetch
    if(selections.pokedex !== null && selections.pokemon !== null)
    return(
        <>
            {data.map()}
        </>
    );
    
}

export default MainMenu;