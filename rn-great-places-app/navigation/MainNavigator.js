import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceCreateScreen from "../screens/PlaceCreateScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    PlacesList: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    PlaceCreate: PlaceCreateScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
