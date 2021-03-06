import React from "react";
import { useTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import DrawerContent from "./DrawerContent";
import ProfileScreen from "../screens/ProfileScreen";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OrdersScreen from "../screens/OrdersScreen";

const Drawer = createDrawerNavigator();

const FlyBuyDrawer = () => {
  const { colors } = useTheme();

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
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          drawerLabel: "Profile",
        }}
      />
      <Drawer.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="glass-whiskey" color={color} size={size} />
          ),
          drawerLabel: "Your Orders",
        }}
      />
    </Drawer.Navigator>
  );
};

export default FlyBuyDrawer;
