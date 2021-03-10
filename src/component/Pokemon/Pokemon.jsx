import React from "react";
import pokemonBol from "../../assets/images/pokemonBol.svg";

import "./Pokemon.scss"
import NotFound from "../NotFound/NotFountd";


const Pokemon = (props) => {

    const pokemon = props.pokemon.map((pokemon) => {
        if (pokemon) {
            return {...pokemon}
        } else {
            return pokemon;
        }

    })

    return (
        <div className="pokemon__box">
            {!pokemon && <NotFound/>}

            {pokemon && pokemon.map((item) =>
                <div key={item.id}>
                    <div className="pokemon__photo">
                        <img className="pokemon__img"
                             src={item.sprites.other["official-artwork"]["front_default"] || pokemonBol} alt="pokemon"/>
                    </div>
                    <div className="pokemon__name"> {item.name} {item.id}</div>
                    <div className="pokemon__info"> Struggle: {item["base_experience"]}</div>
                </div>
            )}

        </div>
    )
}


export default Pokemon;