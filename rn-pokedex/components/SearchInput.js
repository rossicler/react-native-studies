import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import TextStyled from "../components/TextStyled";

const SearchInput = (props) => {
  const [text, setText] = useState(""),
    [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    props.onChangeText(text);
  }, [text, setText]);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onCloseHandler = () => {
    setText("");
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {text.length === 0 && !isFocused ? (
        <TouchableOpacity style={styles.touchable} onPress={onFocusHandler}>
          <View style={styles.placeholder}>
            <Image
              style={styles.placeholderImg}
              source={require("../assets/icons/search.png")}
            />
            <TextStyled style={styles.placeholderText}>Search</TextStyled>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
          <Image
            style={styles.placeholderImg}
            source={require("../assets/icons/search.png")}
          />
          <TextInput
            style={styles.inputText}
            value={text}
            onChangeText={(newText) => setText(newText)}
            autoFocus={true}
          />
          <Ionicons
            name="md-close"
            size={16}
            color={Colors.mediumGray}
            onPress={onCloseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    height: 35,
    backgroundColor: Colors.background,
  },
  touchable: {
    flex: 1,
  },
  placeholder: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderImg: {
    width: 10,
    height: 10,
  },
  placeholderText: {
    paddingLeft: 10,
    color: Colors.mediumGray,
  },
  inputContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    marginHorizontal: 10,
    flex: 1,
  },
});
