import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../components/SearchInput";
import Colors from "../constants/Colors";
import * as pokemonsActions from "../store/pokemon-actions";

const PokemonListScreen = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  const [searchText, setSearchText] = useState(""),
    [error, setError] = useState(false),
    [isLoading, setIsLoading] = useState(false);

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

  if (error) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.centered}>
          <Text>An error occurred!</Text>
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
          <Text style={styles.logoText}>Pokédex</Text>
        </View>
        <View>
          <Text>Sort</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchInput onChangeText={(text) => setSearchText(text)} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={pokemons}
        renderItem={(itemData) => <Text>{itemData.item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 30,
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoImg: {
    width: 30,
    height: 30,
  },
  logoText: {
    paddingHorizontal: 15,
    fontSize: 22,
  },
  searchContainer: {
    marginBottom: 20,
  },
});
