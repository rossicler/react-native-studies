import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PokemonDetailScreen = (props) => {
  const pokemon = props.route.params.pokemon;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({});
