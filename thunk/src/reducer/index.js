import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from "../actions/index";
import {
  FETCH_PAGE_START,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAIL
} from "../actions/index";

const initialState = {
  pokemon: [],
  error: "",
  getting: false,
  next: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20",
  last: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        getting: true
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.results,
        getting: false,
        next: action.payload.next,
        last: action.payload.previous
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload,
        getting: false
      };
    case FETCH_PAGE_START:
      return {
        ...state,
        getting: true
      };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.results,
        getting: false,
        next: action.payload.next,
        last: action.payload.previous
      };
    case FETCH_PAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        getting: false
      };
    default:
      return state;
  }
};

export default reducer;