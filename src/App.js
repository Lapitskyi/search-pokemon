import './App.scss';

import React from "react";

import SearchPokemonContainer from "./component/SearchPokemon/SearchPokemonContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
                 <SearchPokemonContainer/>
            </div>
        </div>
    )
}

export default App;
