import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import TextStyled from "./TextStyled";
import Colors from "../constants/Colors";
import { statNameParser, fillZeros } from "../utils/pokemonParser";

const StatRow = (props) => {
  return (
    <View style={styles.statsListItem}>
      <View style={styles.statsNameContainer}>
        <TextStyled>{statNameParser(props.item.stat.name)}</TextStyled>
      </View>
      <View style={styles.statsNumContainer}>
        <TextStyled style={styles.statsNum}>
          {fillZeros(3, props.item.base_stat)}
        </TextStyled>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={props.item.base_stat / 200}
            color={props.color}
            style={styles.progressBar}
          />
        </View>
      </View>
    </View>
  );
};

export default StatRow;

const styles = StyleSheet.create({
  statsListItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsNameContainer: {
    paddingHorizontal: 10,
    minWidth: 60,
    width: "15%",
    alignItems: "flex-end",
    borderRightColor: Colors.lightGray,
    borderRightWidth: 1,
  },
  statsNumContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  statsNum: {
    paddingHorizontal: 10,
  },
  progressBarContainer: {
    width: "80%",
  },
  progressBar: {
    width: "100%",
    height: 5,
    borderRadius: 8,
  },
});
