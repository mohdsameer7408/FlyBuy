import "react-native-gesture-handler";
import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import FlyBuyNavigator from "./app/navigations/FlyBuyNavigator";
import store from "./app/features/store";

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
    <Provider store={store}>
      <FlyBuyNavigator />
    </Provider>
  );
}
