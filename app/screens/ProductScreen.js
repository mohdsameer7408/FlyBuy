import React from "react";
import { StyleSheet, View } from "react-native";

import FlyText from "../components/FlyText";

const ProductScreen = () => {
  return (
    <View style={styles.productScreen}>
      <FlyText>Product Screen</FlyText>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
