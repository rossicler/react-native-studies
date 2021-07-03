import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonListScreen from "../screens/PokemonListScreen";

const PokedexStackNavigator = createStackNavigator();

const PokedexNavigator = () => {
  return (
    <PokedexStackNavigator.Navigator>
      <PokedexStackNavigator.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{
          headerShown: false,
        }}
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
