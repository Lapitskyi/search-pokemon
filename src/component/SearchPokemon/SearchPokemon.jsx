import React from "react";
import "./SearchPokemon.scss";
import * as axios from "axios";


const SearchPokemon = (props) => {

    // const [pokemon, setPokemon] = useState([]);

    let pokemonName = React.createRef()

    const onSubmit = (e) => {
        e.preventDefault();
        let text = pokemonName.current.value;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`).then(response => {

            if ("ditto" === response.data.name) {
                console.log(response.data)
            }
        });

    }

    return (
        <div className="search__inner">
            <h2 className="search__title"> Pokemon name</h2>
            <p className="search__text">"pikachu", "charizard", or "mew"</p>
            <form className="form">
                <label className="form__label">
                    <input className="form__input"
                           type="text"
                           placeholder="pokemon-search"
                           ref={pokemonName}
                    />
                </label>
                <button className="form__btn" type="submit" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SearchPokemon;