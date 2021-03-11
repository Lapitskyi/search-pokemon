import React from "react";
import SearchPokemon from "./SearchPokemon";
import {connect} from "react-redux";
import {addNewPokemonText, addPokemon, errorPokemon, toggleIsLoader} from "../../redux/search-reducer";
import * as axios from "axios";



const SearchPokemonContainer = (props) => {

    const onChangeText = (e) => {
        props.addNewPokemonText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let newPokemon = props.newPokemonText.toLowerCase()
        if(newPokemon!==''){
            props.toggleIsLoader(true);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
                .then(response => {
                    if (newPokemon.toLowerCase() === response.data.name || response.data.id) {
                        props.toggleIsLoader(false)
                        props.addPokemon(response.data);
                        console.log(response.data)
                    }
                })
                .catch(err => {
                    if (err.response) {
                        props.toggleIsLoader(false)
                        props.errorPokemon(null)

                    } else if (err.request) {
                        // client never received a response, or request never left
                    }
                })
        }

    }

    return <SearchPokemon
        onChangeText={onChangeText}
        onSubmit={onSubmit}
        newPokemonText={props.newPokemonText}
        pokemon={props.pokemon}
        isLoader={props.isLoader}
    />
}


let mapStateToProps = (state) => {
    return {
        pokemon: state.searchPokemon.pokemon,
        newPokemonText: state.searchPokemon.newPokemonText,
        isLoader: state.searchPokemon.isLoader
    }
};


export default connect(mapStateToProps, {
    addNewPokemonText,
    addPokemon,
    errorPokemon,
    toggleIsLoader
})(SearchPokemonContainer);