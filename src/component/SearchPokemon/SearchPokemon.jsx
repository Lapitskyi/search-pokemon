import React from "react";
import "./SearchPokemon.scss";
import * as axios from "axios";
import {Redirect} from "react-router-dom";


const SearchPokemon = (props) => {

    const onChangeText = (e) => {
        let text = e.target.value;
        props.addNewPokemonText(text);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let nemPokemon = props.newPokemonText.toLowerCase()

        axios.get(`https://pokeapi.co/api/v2/pokemon/${nemPokemon}`)
            .then(response => {
                if (nemPokemon.toLowerCase() === response.data.name || response.data.id) {
                    props.addPokemon(response.data);
                }
            })
            .catch(err => {
                if (err.response ) {
                    console.log(err.response);
                    <Redirect to='notfound'/>
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    }

    return (
        <div className="search__inner">
            <h2 className="search__title">Pokemon Name </h2>
            <p className="search__text">Try “pikachu”, “charizard”, or “mew”</p>
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