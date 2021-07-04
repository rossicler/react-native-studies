import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../components/SearchInput";
import PokemonCard from "../components/PokemonCard";
import TextStyled from "../components/TextStyled";
import Colors from "../constants/Colors";
import * as pokemonsActions from "../store/pokemon-actions";

const PokemonListScreen = (props) => {
  const allPokemons = useSelector((state) => state.pokemons.pokemons);

  const [searchText, setSearchText] = useState(""),
    [error, setError] = useState(false),
    [isLoading, setIsLoading] = useState(false),
    [pokemons, setPokemons] = useState(
      useSelector((state) => state.pokemons.pokemons)
    );

  const dispatch = useDispatch();

  const loadPokemons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(pokemonsActions.fetchPokemons());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setError]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  useEffect(() => {
    if (searchText.length > 0) {
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.includes(searchText.toLowerCase())
      );
      setPokemons(filteredPokemons);
    } else {
      setPokemons(allPokemons);
    }
  }, [searchText, allPokemons]);

  if (error) {
    console.log(error);
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.centered}>
          <TextStyled>An error occurred!</TextStyled>
          <Button
            title="Try again"
            onPress={loadPokemons}
            color={Colors.darkGray}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.darkGray} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={{
              uri: "https://img.pngio.com/ball-game-go-poke-pokeball-pokemon-pokestop-icon-pokeball-icon-png-512_512.png",
            }}
          />
          <TextStyled style={styles.logoText}>Pokédex</TextStyled>
        </View>
        <View>
          <TextStyled>Sort</TextStyled>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchInput onChangeText={(text) => setSearchText(text)} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={pokemons}
        renderItem={(itemData) => (
          <PokemonCard
            pokemon={itemData.item}
            onSelect={() =>
              props.navigation.navigate("PokemonDetail", {
                pokemon: itemData.item,
              })
            }
          />
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 15,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    marginBottom: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImg: {
    width: 30,
    height: 30,
  },
  logoText: {
    paddingHorizontal: 15,
    fontSize: 30,
    fontFamily: "poppins-bold",
  },
  searchContainer: {
    marginBottom: 20,
  },
});
