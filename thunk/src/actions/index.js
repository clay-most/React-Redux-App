import axios from "axios";
import { connect } from "react-redux";

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL";

export const FETCH_PAGE_START = "NEXT_PAGE_START";
export const FETCH_PAGE_SUCCESS = "NEXT_PAGE_SUCCESS";
export const FETCH_PAGE_FAIL = "NEXT_PAGE_FAIL";

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("ERROR", error);
      dispatch({
        type: FETCH_POKEMON_FAIL,
        payload: error.response
      });
    });
};

export const getNextPage = currentPage => dispatch => {
  dispatch({ type: FETCH_PAGE_START });
  axios
    .get(currentPage)
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_PAGE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("ERROR", error);
      dispatch({ type: FETCH_PAGE_FAIL, payload: error.response });
    });
};

const mapStateToProps = state => {
  return { url: state.url };
};

export default connect(mapStateToProps,{})(getPokemon)