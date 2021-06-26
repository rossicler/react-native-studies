import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
