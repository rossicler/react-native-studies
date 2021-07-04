import AsyncStorage from "@react-native-async-storage/async-storage";

import { fetchAllPokemonsFromAPI } from "../utils/pokemonApi";

export const SET_POKEMONS = "SET_POKEMONS";

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      let pokemons = JSON.parse(await AsyncStorage.getItem("pokemons"));
      let shouldInsertOnDb = false;
      if (!pokemons) {
        pokemons = await fetchAllPokemonsFromAPI();
        shouldInsertOnDb = true;
      }

      dispatch({ type: SET_POKEMONS, pokemons: pokemons });

      if (shouldInsertOnDb) {
        AsyncStorage.setItem("pokemons", JSON.stringify(pokemons));
      }
    } catch (err) {
      throw err;
    }
  };
};
