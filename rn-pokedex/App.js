import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/MainNavigator";
import pokemonsReducer from "./store/pokemon-reducers";

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    poppins: Poppins_400Regular,
    "poppins-bold": Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
