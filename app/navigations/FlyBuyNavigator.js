import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthStack from "./AuthStack";

const FlyBuyNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default FlyBuyNavigator;
