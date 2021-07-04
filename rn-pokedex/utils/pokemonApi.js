import PokemonsGenMetaData from "../constants/PokemonsGenMetaData";
import { Pokemon } from "../models/pokemon.model";

export const fetchAllPokemonsFromAPI = async () => {
  const responseList = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${PokemonsGenMetaData.firstGen.end}&offset=${PokemonsGenMetaData.firstGen.start}`
  );

  if (!responseList.ok) {
    throw new Error("Something went wrong!");
  }

  const resData = await responseList.json();
  const loadedPokemons = [];

  for (let result of resData.results) {
    const response = await fetch(result.url);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const pokemon = await response.json();

    const newPokemon = new Pokemon(
      pokemon.id,
      pokemon.name,
      pokemon.sprites.other["official-artwork"].front_default,
      pokemon.types,
      pokemon.weight / 10,
      pokemon.height / 10,
      pokemon.abilities,
      pokemon.stats
    );

    loadedPokemons.push(newPokemon);
  }

  return loadedPokemons;
};
