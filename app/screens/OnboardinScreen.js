import React from "react";
import { Dimensions, StatusBar, StyleSheet, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyTextBold from "../components/FlyTextBold";
import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";

const { width } = Dimensions.get("window");

const OnboardinScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.onboardinScreen}>
      <Image
        source={require("../assets/images/onboarding.png")}
        resizeMode="contain"
        style={styles.onboardingImage}
      />
      <View style={styles.descriptionContainer}>
        <FlyTextBold style={styles.title}>
          Lorem ipsum dolor sit amet.
        </FlyTextBold>
        <FlyText style={{ ...styles.description, color: colors.placeholder }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi
          sunt itaque autem officia obcaecati sint aperiam fugiat et.
        </FlyText>
      </View>
      <View style={styles.actionButtons}>
        <FlyButton
          containerStyle={styles.registerButton}
          buttonColor={colors.text}
          textStyle={{ color: colors.background }}
          onButtonPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </FlyButton>
        <FlyButton
          containerStyle={{ ...styles.registerButton, ...styles.loginButton }}
          onButtonPress={() => navigation.navigate("LoginScreen")}
        >
          Sign In
        </FlyButton>
      </View>
    </View>
  );
};

export default OnboardinScreen;

const styles = StyleSheet.create({
  onboardinScreen: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
    alignItems: "center",
  },
  onboardingImage: {
    width: width * 0.8,
  },
  descriptionContainer: {
    width: width * 0.8,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
  actionButtons: {
    position: "absolute",
    bottom: 30,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    marginTop: 30,
  },
  registerButton: {
    width: width * 0.42,
    height: 50,
    borderRadius: 16,
  },
  loginButton: {
    shadowColor: "transparent",
  },
});
