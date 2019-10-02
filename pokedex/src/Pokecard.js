import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    let id = props.id;
    return (
        <li className="Pokecard">
            <h2>{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={props.name} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>                       
        </li>
    );
}

export default Pokecard;