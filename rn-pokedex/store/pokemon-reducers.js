import { SET_POKEMONS } from "./pokemon-actions";

const initialState = {
  pokemons: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      state = { pokemons: action.pokemons };
  }
  return state;
};
