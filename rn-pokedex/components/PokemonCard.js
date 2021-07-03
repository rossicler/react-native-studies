import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/Colors";

const PokemonCard = ({ pokemon, ...props }) => {
  const pokemonColor = Colors.pokemonColors[pokemon.types[0].type.name];

  const getIdText = (id) => {
    let idText = "#";
    for (let i = 0; i < 3 - id.toString().length; i++) {
      idText += "0";
    }
    return idText + id;
  };

  return (
    <View
      style={{
        ...styles.card,
        borderColor: pokemonColor,
      }}
    >
      <View style={styles.idContainer}>
        <Text style={{ ...styles.idText, color: pokemonColor }}>
          {getIdText(pokemon.id)}
        </Text>
      </View>
      <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
      <View style={{ ...styles.titleContainer, backgroundColor: pokemonColor }}>
        <Text style={styles.titleText}>{pokemon.name}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    margin: 5,
    height: 130,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  idContainer: {
    height: "15%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  idText: {
    fontSize: 11,
  },
  image: {
    height: "65%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  titleContainer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    textTransform: "capitalize",
  },
});
