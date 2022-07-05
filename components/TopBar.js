import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
//TODO: add identifiers to the color names: like link color, text color, etc.
import { colors } from "../config.json";

/*
<Appbar.Action icon="magnify" onPress={() => {console.log("Diet Mountain Dew")}}/>
*/

const TopBar = () => {
  return (
    <Appbar.Header style={styles.item}>
      <Appbar.Content title="Home" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors["bej"],
  },
});
export default TopBar;
