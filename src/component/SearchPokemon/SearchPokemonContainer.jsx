import React from "react";
import SearchPokemon from "./SearchPokemon";
import {connect} from "react-redux";
import {addNewPokemon, addPokemon} from "../../redux/search-reducer";



let mapStateToProps = (state) => {
    return {
        pokemon: state.searchPokemon.pokemon,
        newPokemonText:state.searchPokemon.newPokemonText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        addNewPokemonText:(text) =>{
            dispatch(addNewPokemon(text))
        },

        setPokemon:(pokemon)=>{
            dispatch(addPokemon(pokemon))
        }
    }}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPokemon);