import React from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
          image={null}
          title={itemData.item.title}
          address={null}
        />
      )}
    />
  );
};

export default PlacesListScreen;

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navData.navigation.navigate("PlaceCreate");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});
