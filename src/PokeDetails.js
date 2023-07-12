


const PokeDetails = ({ fetch, selections, setSelections, data}) => {
    

    return(
        <table className="Pokemon Details">
            <tr>
                <th>Name</th>
                <td>{data.name}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{data.types.map(el => <p>{el.type.name}</p>)}</td>
            </tr>
            <tr>
                <th>Abilities</th>
                <td>{data.abilities.map(el => <p>{el.ability.name}</p>)}</td>
            </tr>
            <tr>
                <th>Stats</th>
                <td></td>
                <td>{data.stats.map(el => <p>{el.base_stat}</p>)}</td>
            </tr>
            
        </table>
    )

}

export default PokeDetails;