import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import Colors from "@constants/Colors";
import * as authActions from "@store/actions/auth";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userDate");
      if (!userData) {
        // props.navigation.navigate("Auth");
        dispatch(authActions.setDidTryAl());
        return;
      }
      const parsedData = JSON.parse(userData);
      const { token, userId, expirationDate } = parsedData;
      const expiryDate = new Date(expirationDate);
      if (expiryDate <= new Date() || !token || !userId) {
        // props.navigation.navigate("Auth");
        dispatch(authActions.setDidTryAl());
        return;
      }

      const expirationTime = expiryDate.getTime() - new Date().getTime();

      // props.navigation.navigate("Shop");
      dispatch(authActions.authenticate(userId, token, expirationTime));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
