import React from "react";
import SearchPokemon from "./SearchPokemon";
import {connect} from "react-redux";
import {addNewPokemonText, addPokemon} from "../../redux/search-reducer";


let mapStateToProps = (state) => {
    return {
        pokemon: state.searchPokemon.pokemon,
        newPokemonText: state.searchPokemon.newPokemonText
    }
};




export default connect(mapStateToProps, {
    addNewPokemonText,
    addPokemon
})(SearchPokemon);