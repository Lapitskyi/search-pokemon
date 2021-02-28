const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
const ADD_POKEMON = "ADD_POKEMON";


let initialState = {
    pokemon: [],
    newPokemonText:""
}

const searchReducer = (state = initialState, action)=>{


    switch (action.type){
        case ADD_NEW_POKEMON:
            return  {...state,newPokemonText: action.text};

        case ADD_POKEMON:
            return{
                ...state,pokemon:[action.pokemon],

            }
        default:
            return state;

    }
}


export const addNewPokemon = (text) =>({type:ADD_NEW_POKEMON, text:text});
export const addPokemon = (pokemon) =>({type:ADD_POKEMON,pokemon: pokemon});


export default searchReducer;