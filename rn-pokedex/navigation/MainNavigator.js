import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PokemonListScreen from "../screens/PokemonListScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";

const PokedexStackNavigator = createStackNavigator();

const PokedexNavigator = () => {
  return (
    <PokedexStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PokedexStackNavigator.Screen
        name="PokemonList"
        component={PokemonListScreen}
      />
      <PokedexStackNavigator.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
      />
    </PokedexStackNavigator.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <PokedexNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
