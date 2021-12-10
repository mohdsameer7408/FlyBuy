import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyText from "../components/FlyText";

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.registerScreen, backgroundColor: colors.card }}>
      <FlyText>RegisterScreen</FlyText>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
