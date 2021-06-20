import React from "react";
import { StyleSheet, Switch, View } from "react-native";

import TextStyled from "./TextStyled";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <TextStyled>{props.label}</TextStyled>
      <Switch
        trackColor={{ true: Colors.primary, false: "" }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});
