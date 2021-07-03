import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TextStyled from "./TextStyled";

const PillTag = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props.backgroundColor,
        ...props.style,
      }}
    >
      <TextStyled style={styles.text}>{props.children}</TextStyled>
    </View>
  );
};

export default PillTag;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontFamily: "poppins-bold",
    textTransform: "capitalize",
  },
});
