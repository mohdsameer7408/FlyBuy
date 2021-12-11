import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import AuthStack from "./AuthStack";

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
    card: "rgb(242, 242, 242)",
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#191720",
  },
};

const FlyBuyNavigator = () => {
  const scheme = useColorScheme();
  console.log(scheme);

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        <AuthStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default FlyBuyNavigator;
