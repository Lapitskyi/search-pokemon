import React from "react";

import "./Pokemon.scss"
import SearchPokemon from "../SearchPokemon/SearchPokemon";


const Pokemon = (props) => {
    return (
        <div className="pokemon__inner">

            <SearchPokemon/>
            <div className="pokemon__box">
                <div className="pokemon__photo">
                    <img className="pokemon__img" src="https://via.placeholder.com/600" alt="photo pokemon"/>
                </div>
                <div className="pokemon__name"> Ditto132</div>
                <div className="pokemon__info"> .Struggle:15</div>
            </div>
        </div>
    )
}

export default Pokemon;