import React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import TextStyled from "../components/TextStyled";
import TouchableStyled from "../components/TouchableStyled";
import PillTag from "../components/PillTag";
import StatRow from "../components/StatRow";
import { fillZeros } from "../utils/pokemonParser";

const PokemonDetailScreen = (props) => {
  const pokemon = props.route.params.pokemon;
  const pokemonColor = Colors.pokemonColors[pokemon.types[0].type.name];

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
        <TextStyled style={styles.headerId}>
          #{fillZeros(3, pokemon.id)}
        </TextStyled>
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
          <View style={styles.aboutContainer}>
            <TextStyled style={{ ...styles.contentTitle, color: pokemonColor }}>
              About
            </TextStyled>
            <View style={styles.aboutContent}>
              <View style={{ ...styles.aboutItem, ...styles.borderRight }}>
                <View style={styles.row}>
                  <Image
                    source={require("../assets/icons/weight.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <TextStyled>{pokemon.weight} kg</TextStyled>
                </View>
                <TextStyled style={styles.smallText}>Weight</TextStyled>
              </View>
              <View style={{ ...styles.aboutItem, ...styles.borderRight }}>
                <View style={styles.row}>
                  <Image
                    source={require("../assets/icons/height.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <TextStyled>{pokemon.height} m</TextStyled>
                </View>
                <TextStyled style={styles.smallText}>Height</TextStyled>
              </View>
              <View style={styles.aboutItem}>
                {pokemon.abilities.map((item) => (
                  <TextStyled key={item.slot} style={styles.abilitiesText}>
                    {item.ability.name}
                  </TextStyled>
                ))}
                <TextStyled style={styles.smallText}>Abilities</TextStyled>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={styles.statsContainer}>
              <TextStyled
                style={{ ...styles.contentTitle, color: pokemonColor }}
              >
                Stats Base
              </TextStyled>
              <View style={styles.statsListContainer}>
                {pokemon.stats.map((item) => (
                  <StatRow
                    key={item.stat.name}
                    color={pokemonColor}
                    item={item}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
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
    marginTop: Dimensions.get("window").height * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  tags: {
    flexDirection: "row",
  },
  pill: {
    marginHorizontal: 12,
  },
  contentTitle: {
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  aboutContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  aboutContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  borderRight: {
    borderRightColor: Colors.lightGray,
    borderRightWidth: 1,
  },
  aboutItem: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  icon: {
    height: 22,
    marginRight: 7,
  },
  smallText: {
    fontSize: 12,
    color: Colors.mediumGray,
  },
  abilitiesText: {
    textTransform: "capitalize",
  },
  statsContainer: {
    alignItems: "center",
  },
  statsListContainer: {
    width: "95%",
  },
});
