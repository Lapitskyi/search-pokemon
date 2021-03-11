import React from 'react';
import './SearchPokemon.scss';

import Pokemon from '../Pokemon/Pokemon';
import NotFound from '../NotFound/NotFound';
import Preloader from "../Preloader/Preloader";


const SearchPokemon = (props) => {

    return (
        <div className="search">
            {
                <div className="search__inner">
                    <h2 className="search__title"> Pokemon Name </h2>
                    <p className="search__text">Try name "pikachu", "clefable" or "number"</p>
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
            }
            {(props.isLoader ? <Preloader/> : null) || (props.pokemon && <Pokemon pokemon={props.pokemon}/>) || (props.pokemon === null && <NotFound/>)}


        </div>
    )
}

export default SearchPokemon;