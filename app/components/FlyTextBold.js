import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const FlyTextBold = ({ style, children, onPress }) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[styles.text, { color: colors.text }, style]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default FlyTextBold;

const styles = StyleSheet.create({
  text: {
    fontFamily: "source-sans-bold",
  },
});
