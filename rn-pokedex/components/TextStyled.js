import React from "react";
import { StyleSheet, Text } from "react-native";

const TextStyled = (props) => {
  return <Text {...props} style={{ ...styles.text, ...props.style }}></Text>;
};

export default TextStyled;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins",
  },
});
