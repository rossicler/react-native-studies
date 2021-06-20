import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import TextStyled from "../components/TextStyled";

const FavoriteScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return favMeals.length === 0 || !favMeals ? (
    <View style={styles.screen}>
      <TextStyled>No Favorite Meals Founds. Start adding some!</TextStyled>
    </View>
  ) : (
    <MealList meals={favMeals} navigation={props.navigation} />
  );
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
