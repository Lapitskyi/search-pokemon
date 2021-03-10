import React from "react";
import "./SearchPokemon.scss";
import * as axios from "axios";



const SearchPokemon = (props) => {



    return (

        <div className="search__inner">
            <h2 className="search__title">Pokemon Name </h2>

            <p className="search__text">Try “pikachu”, “charizard”, or “mew”</p>
            <form className="form">
                <label className="form__label">
                    <input className="form__input"
                           type="text"
                           placeholder="pokemon-search"
                           value={props.newPokemonText}
                           onChange={props.onChangeText}
                    />
                </label>
                <button className="form__btn" type="submit" onClick={props.onSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default SearchPokemon;