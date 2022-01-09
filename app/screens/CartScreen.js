import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.cartScreen}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
