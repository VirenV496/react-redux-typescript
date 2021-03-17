import {combineReducers} from "redux";
import pokemonReducer from "./reducers/PokemonReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default RootReducer