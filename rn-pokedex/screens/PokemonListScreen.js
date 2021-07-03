import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../components/SearchInput";

const PokemonListScreen = () => {
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
      <View>
        <SearchInput />
      </View>
      <Text>Flatlist</Text>
    </SafeAreaView>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 30,
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
});
