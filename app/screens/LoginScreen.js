import React from "react";
import { StyleSheet, View } from "react-native";

import FlyTextBold from "../components/FlyTextBold";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.loginScreen}>
      <FlyTextBold>Login Screen</FlyTextBold>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
