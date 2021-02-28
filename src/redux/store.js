import {combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer";


let reducers = combineReducers({
    searchPokemon:searchReducer

})

let store = createStore(reducers);

export default store;