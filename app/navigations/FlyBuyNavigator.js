import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { useSelector } from "react-redux";

import AuthStack from "./AuthStack";
import { selectUser } from "../features/authSlice";

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
    card: "rgb(242, 242, 242)",
    error: "#e80000",
    border: "#333",
    placeholder: "#888",
    success: "#7FBD32",
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#191720",
    error: "#e80000",
    border: "#333",
    placeholder: "#888",
    success: "#7FBD32",
  },
};

const FlyBuyNavigator = () => {
  const scheme = useColorScheme();
  const user = useSelector(selectUser);

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        {!user && <AuthStack />}
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default FlyBuyNavigator;
