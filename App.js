import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import FlyText from "./app/components/FlyText";

enableScreens();

const fetchFonts = async () =>
  Font.loadAsync({
    "source-sans": require("./app/assets/fonts/SourceSansPro-Light.ttf"),
    "source-sans-bold": require("./app/assets/fonts/SourceSansPro-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(error) => console.log(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlyText>Open up App.js to start working on your app!</FlyText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
