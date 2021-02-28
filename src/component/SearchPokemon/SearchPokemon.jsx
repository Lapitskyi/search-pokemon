import React, {useState, useEffect} from "react";
import "./SearchPokemon.scss";
import * as axios from "axios";


const SearchPokemon = (props) => {


    const onChangeText = (e) => {
        let text = e.target.value;
        props.addNewPokemonText(text);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        let nemPokemon = props.newPokemonText.toLowerCase()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nemPokemon}`).then(response => {
            if (nemPokemon.toLowerCase() === response.data.name || response.data.id) {
                console.log(response.data);
                props.setPokemon(response.data);
            }
        });
    }

    return (
        <div className="search__inner">

            <h2 className="search__title">Pokemon name</h2>

            <p className="search__text">{props.newPokemonText}</p>
            <form className="form">
                <label className="form__label">
                    <input className="form__input"
                           type="text"
                           placeholder="pokemon-search"
                           onChange={onChangeText}
                           value={props.newPokemonText}
                    />
                </label>
                <button className="form__btn" type="submit" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default SearchPokemon;