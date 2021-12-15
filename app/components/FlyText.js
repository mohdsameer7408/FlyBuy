import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const FlyText = ({ style, children }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.text, { color: colors.text }, style]}>{children}</Text>
  );
};

export default FlyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "source-sans",
  },
});
