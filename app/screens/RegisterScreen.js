import React from "react";
import { StyleSheet, View } from "react-native";

import FlyText from "../components/FlyText";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.registerScreen}>
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
