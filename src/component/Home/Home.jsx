import React from 'react'
import SearchPokemonContainer from "../SearchPokemon/SearchPokemonContainer";
import PokemonContainer from "../Pokemon/PokemonContainer";
import './Home.scss'

const Home = () => {
    return (
        <div className="home__inner">
            <SearchPokemonContainer/>
            <PokemonContainer/>
        </div>
    )
}


export default Home;