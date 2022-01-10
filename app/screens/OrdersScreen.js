import React from "react";
import { StyleSheet, View } from "react-native";

import FlyText from "../components/FlyText";

const OrdersScreen = () => {
  return (
    <View style={styles.ordersScreen}>
      <FlyText>Orders Screen</FlyText>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  ordersScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
