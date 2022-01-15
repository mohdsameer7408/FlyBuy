import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductScreen from "../screens/ProductScreen";
import FlyHeaderButton from "../components/FlyHeaderButton";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerLeftContainerStyle: { marginLeft: 10 },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShown: false,
          // headerLeft: () => (
          //   <HeaderButtons HeaderButtonComponent={FlyHeaderButton}>
          //     <Item title="menu" iconName="grid-outline" onPress={() => {}} />
          //   </HeaderButtons>
          // ),
        })}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
