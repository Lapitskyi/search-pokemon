import React from "react";
import  pokemonBol from "../../assets/images/pokemonBol.png";

import "./Pokemon.scss"



const Pokemon = (props) => {
    return (
            <div className="pokemon__box">
                {
                    props.pokemon.map((item)=>
                    <div key={item.id}>
                        <div className="pokemon__photo">
                            <img className="pokemon__img" src={item.sprites.other["official-artwork"].front_default!=null? item.sprites.other["official-artwork"].front_default : pokemonBol} alt="pokemon"/>
                        </div>
                        <div className="pokemon__name"> {item.name} {item.id}</div>
                        <div className="pokemon__info"> .Struggle: {item["base_experience"]}</div>

                    </div>
                    )
                }

            </div>
    )
}

export default Pokemon;