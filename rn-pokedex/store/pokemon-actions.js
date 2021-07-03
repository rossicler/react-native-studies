import { Pokemon } from "../models/pokemon.model";

export const SET_POKEMONS = "SET_POKEMONS";

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const responseList = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=10"
      );

      if (!responseList.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await responseList.json();
      const loadedPokemons = [];

      for (item of resData.results) {
        const response = await fetch(item.url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const pokemon = await response.json();

        const newPokemon = new Pokemon(
          pokemon.id,
          pokemon.name,
          pokemon.sprites.other["official-artwork"].front_default,
          pokemon.types,
          pokemon.weight,
          pokemon.height,
          pokemon.abilities,
          pokemon.stats
        );
        loadedPokemons.push(newPokemon);
      }

      dispatch({ type: SET_POKEMONS, pokemons: loadedPokemons });
    } catch (err) {
      throw err;
    }
  };
};
