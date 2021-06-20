import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const TouchableCmp = (props) => {
  let TouchableElem =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return <TouchableElem {...props}>{props.children}</TouchableElem>;
};

export default TouchableCmp;

const styles = StyleSheet.create({});
