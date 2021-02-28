import './App.scss';

import React from "react";
import SearchPokemonContainer from "./component/SearchPokemon/SearchPokemonContainer";
import PokemonContainer from "./component/Pokemon/PokemonContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
                <div className="app__inner">
                    <SearchPokemonContainer  />
                    <PokemonContainer />
                </div>
            </div>
        </div>
    )
}

export default App;
