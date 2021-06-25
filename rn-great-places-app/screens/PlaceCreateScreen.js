import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/actions/places";

const PlaceCreateScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

PlaceCreateScreen.navigationOptions = {
  headerTitle: "Add Place",
};

export default PlaceCreateScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});