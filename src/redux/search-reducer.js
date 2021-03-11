const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
const ADD_POKEMON = "ADD_POKEMON";
const ERROR_POKEMON = 'ERROR_POKEMON';
const TOGGLE_ISLOADER ='TOGGLE_ISLOADER';


let initialState = {
    pokemon: undefined,
    newPokemonText: '',
    isLoader:false

}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POKEMON:
            return {...state, newPokemonText: action.text};

        case ADD_POKEMON:
            return {
                ...state, pokemon: [action.pokemon],
                newPokemonText: ''
            }

        case ERROR_POKEMON:
            return {
                ...state, pokemon: action.errPokemon,
                newPokemonText: ''
            }
        case TOGGLE_ISLOADER:
            return {
                ...state,isLoader: action.isLoader
            }

        default:
            return state;

    }
}


export const addNewPokemonText = (text) => ({type: ADD_NEW_POKEMON, text: text});
export const addPokemon = (pokemon) => ({type: ADD_POKEMON, pokemon: pokemon});
export const errorPokemon = (errPokemon) => ({type: ERROR_POKEMON, errPokemon});
export const toggleIsLoader = (isLoader)=>({type:TOGGLE_ISLOADER,isLoader});

export default searchReducer;