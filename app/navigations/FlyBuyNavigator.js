import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { useSelector } from "react-redux";

import { selectUser } from "../features/authSlice";
import SplashScreen from "../screens/SplashScreen";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

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
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <SplashScreen setIsLoading={setIsLoading} />;

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        {user ? <HomeStack /> : <AuthStack />}
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default FlyBuyNavigator;
