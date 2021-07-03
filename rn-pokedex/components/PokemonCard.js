import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Colors from "../constants/Colors";
import TextStyled from "../components/TextStyled";
import TouchableStyled from "../components/TouchableStyled";
import { getIdText } from "../utils/pokemonParser";

const PokemonCard = ({ pokemon, ...props }) => {
  const pokemonColor = Colors.pokemonColors[pokemon.types[0].type.name];

  return (
    <View
      style={{
        ...styles.card,
        borderColor: pokemonColor,
      }}
    >
      <TouchableStyled onPress={props.onSelect}>
        <View>
          <View style={styles.idContainer}>
            <TextStyled style={{ ...styles.idText, color: pokemonColor }}>
              {getIdText(pokemon.id)}
            </TextStyled>
          </View>
          <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
          <View
            style={{ ...styles.titleContainer, backgroundColor: pokemonColor }}
          >
            <TextStyled style={styles.titleText}>{pokemon.name}</TextStyled>
          </View>
        </View>
      </TouchableStyled>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    margin: 5,
    height: 140,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  idContainer: {
    height: "15%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  idText: {
    fontSize: 10,
  },
  image: {
    height: "63%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  titleContainer: {
    height: "22%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 12,
  },
});
