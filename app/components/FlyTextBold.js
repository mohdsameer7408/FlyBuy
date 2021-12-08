import React from "react";
import { StyleSheet, Text } from "react-native";

const FlyTextBold = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default FlyTextBold;

const styles = StyleSheet.create({
  text: {
    fontFamily: "source-sans-bold",
  },
});
