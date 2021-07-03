import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const TouchableStyled = (props) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <TouchableNativeFeedback {...props}>
          {props.children}
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
      )}
    </>
  );
};

export default TouchableStyled;

const styles = StyleSheet.create({});
