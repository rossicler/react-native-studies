import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import MainNavigator from "./navigation/MainNavigator";
import pokemonsReducer from "./store/pokemon-reducers";

const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
