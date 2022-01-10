import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
