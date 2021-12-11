import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyTextBold from "../components/FlyTextBold";
import FlyText from "../components/FlyText";

const { width } = Dimensions.get("window");

const OnboardinScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.onboardinScreen }}>
      <View style={styles.descriptionContainer}>
        <FlyTextBold style={styles.title}>
          Lorem ipsum dolor sit amet.
        </FlyTextBold>
        <FlyText style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi
          sunt itaque autem officia obcaecati sint aperiam fugiat et.
        </FlyText>
      </View>
    </View>
  );
};

export default OnboardinScreen;

const styles = StyleSheet.create({
  onboardinScreen: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight + 30,
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
});
