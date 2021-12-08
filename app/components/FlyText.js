import React from "react";
import { StyleSheet, Text } from "react-native";

const FlyText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default FlyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "source-sans",
  },
});
