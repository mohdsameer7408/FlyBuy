import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const FlyBuyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default FlyBuyDrawer;
