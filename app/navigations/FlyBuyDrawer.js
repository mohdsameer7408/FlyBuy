import React from "react";
import { useTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import DrawerContent from "./DrawerContent";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const FlyBuyDrawer = () => {
  const { colors } = useTheme()

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons
            name="person-outline"
            color={color}
            size={size}
          />
        ),
      }} />
    </Drawer.Navigator>
  );
};

export default FlyBuyDrawer;
