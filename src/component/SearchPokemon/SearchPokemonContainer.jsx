import React from "react";
import SearchPokemon from "./SearchPokemon";
import {connect} from "react-redux";
import {addNewPokemonText, addPokemon} from "../../redux/search-reducer";
import * as axios from "axios";


const SearchPokemonContainer = (props) => {

    const onChangeText = (e) => {
        props.addNewPokemonText(e.target.value);
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
                if (err.response) {
                    props.addPokemon()
                    console.log(err.response)
                } else if (err.request) {
                    // client never received a response, or request never left
                }
            })
    }

    return <SearchPokemon
        onChangeText={onChangeText}
        onSubmit={onSubmit}
        newPokemonText={props.newPokemonText}
        pokemon={props.pokemon}

    />
}


let mapStateToProps = (state) => {
    return {
        pokemon: state.searchPokemon.pokemon,
        newPokemonText: state.searchPokemon.newPokemonText
    }
};


export default connect(mapStateToProps, {
    addNewPokemonText,
    addPokemon
})(SearchPokemonContainer);