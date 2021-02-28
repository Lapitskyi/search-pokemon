import React from 'react'
import pokemonBol from '../../assets/images/pokemonBol.svg'
import {NavLink} from "react-router-dom";
import './NotFound.scss'


const NotFound = () => {
    return (
        <div className="notfound__inner">
            <div className="notfound__title">Pokemon notfound</div>
            <img className="notfound__img" src={pokemonBol} alt="pokemon notfound"/>
            <NavLink className="notfound__link" to='/'>Home </NavLink>
        </div>


    )
}

export default NotFound;
