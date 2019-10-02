import React from 'react';

const Pokecard = (props) => {
    let id = props.id;
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={props.name} />
            <p>{props.type}</p>
            <p>{props.base_experience}</p>                       
        </div>
    );
}

export default Pokecard;