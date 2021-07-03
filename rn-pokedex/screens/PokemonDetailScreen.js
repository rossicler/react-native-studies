import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import TextStyled from "../components/TextStyled";
import TouchableStyled from "../components/TouchableStyled";
import PillTag from "../components/PillTag";
import { getIdText } from "../utils/pokemonParser";

const PokemonDetailScreen = (props) => {
  const pokemon = props.route.params.pokemon;
  const pokemonColor = Colors.pokemonColors[pokemon.types[0].type.name];
  console.log(pokemon.types);

  return (
    <SafeAreaView style={{ ...styles.screen, backgroundColor: pokemonColor }}>
      <View style={styles.backgroundImageContainer}>
        <Image
          source={require("../assets/icons/pokeball-light.png")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableStyled onPress={() => props.navigation.goBack()}>
            <Image
              source={require("../assets/icons/arrow-left.png")}
              style={styles.iconHeader}
              resizeMode="contain"
            />
          </TouchableStyled>
          <TextStyled style={styles.headerTitle}>{pokemon.name}</TextStyled>
        </View>
        <TextStyled style={styles.headerId}>{getIdText(pokemon.id)}</TextStyled>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemon.imageUrl }} style={styles.pokemonImg} />
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.tags}>
            {pokemon.types.map((item) => (
              <PillTag
                key={item.slot}
                backgroundColor={Colors.pokemonColors[item.type.name]}
                style={styles.pill}
              >
                {item.type.name}
              </PillTag>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 20,
    height: 50,
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconHeader: {
    height: 38,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: "poppins-bold",
    textTransform: "capitalize",
    color: "white",
    marginLeft: 10,
  },
  headerId: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 16,
  },
  backgroundImageContainer: {
    position: "absolute",
    height: Dimensions.get("window").height * 0.35,
    elevation: -2,
    width: "95%",
    marginTop: 30,
    alignItems: "flex-end",
  },
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").height * 0.35,
  },
  imageContainer: {
    position: "absolute",
    marginTop: "25%",
    backgroundColor: "transparent",
  },
  pokemonImg: {
    height: Dimensions.get("window").width * 0.6,
    aspectRatio: 1,
  },
  card: {
    flex: 1,
    elevation: -1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    marginTop: "45%",
    width: "97%",
    marginBottom: Dimensions.get("window").width * 0.015,
  },
  cardContent: {
    marginTop: Dimensions.get("window").height * 0.12,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    marginHorizontal: 12,
  },
});
