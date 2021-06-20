import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextStyled = (props) => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TextStyled;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
