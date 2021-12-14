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
    <View style={{ ...styles.onboardinScreen }}>
      <Image
        source={require("../assets/images/onboarding.png")}
        resizeMode="contain"
        style={styles.onboardingImage}
      />
      <View style={styles.descriptionContainer}>
        <FlyTextBold style={styles.title}>
          Lorem ipsum dolor sit amet.
        </FlyTextBold>
        <FlyText style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi
          sunt itaque autem officia obcaecati sint aperiam fugiat et.
        </FlyText>
      </View>
      <FlyButton containerStyle={styles.loginButton} buttonColor="#4d4dff">
        Submit
      </FlyButton>
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
  loginButton: {
    width: 80,
    height: 40,
  },
  onboardingImage: {
    width: width * 0.8,
  },
});
