import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const FlyBuyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default FlyBuyDrawer;
