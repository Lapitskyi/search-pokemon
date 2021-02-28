import React from "react";

import {connect} from "react-redux";

import Pokemon from "./Pokemon";


let mapStateToProps = (state) => {
    return {
        pokemon: state.searchPokemon.pokemon,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}}



export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);