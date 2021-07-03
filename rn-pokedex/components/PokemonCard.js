import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Colors from "../constants/Colors";
import TextStyled from "../components/TextStyled";

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
        <TextStyled style={{ ...styles.idText, color: pokemonColor }}>
          {getIdText(pokemon.id)}
        </TextStyled>
      </View>
      <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
      <View style={{ ...styles.titleContainer, backgroundColor: pokemonColor }}>
        <TextStyled style={styles.titleText}>{pokemon.name}</TextStyled>
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
