import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyScreen = (props) => {
  return (
    <View style={styles.centered}>
      <Text>{props.message}</Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
