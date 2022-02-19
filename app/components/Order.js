import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import TouchableComponent from "./TouchableComponent";
import FlyText from "./FlyText";
import FlyTextBold from "./FlyTextBold";
import FlyButton from "./FlyButton";

const Order = () => {
  const { colors } = useTheme();

  return (
    <TouchableComponent
      containerStyle={styles.order}
      wrapperStyle={{ ...styles.orderWrapper, backgroundColor: colors.card }}
    >
      <View style={{ ...styles.imageContainer, borderColor: colors.text }}>
        <Image
          style={styles.orderImage}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
        />
      </View>
      <View style={styles.orderDetails}>
        <FlyText style={styles.orderTitle}>American Pan Pizza</FlyText>
        <FlyTextBold style={styles.orderTitle}>$ 6.99</FlyTextBold>
      </View>
      <View style={styles.orderActionButtons}>
        <FlyButton containerStyle={styles.button} buttonColor={colors.button}>
          -
        </FlyButton>
        <View style={styles.quantity}>
          <FlyTextBold>2</FlyTextBold>
        </View>
        <FlyButton containerStyle={styles.button} buttonColor={colors.button}>
          +
        </FlyButton>
      </View>
    </TouchableComponent>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    width: "100%",
    height: 100,
    marginBottom: 12,
    borderRadius: 12,
  },
  orderWrapper: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  orderDetails: {
    marginLeft: 16,
    height: "50%",
    justifyContent: "space-between",
  },
  orderTitle: {
    fontSize: 16,
  },
  orderActionButtons: {
    position: "absolute",
    right: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  quantity: {
    paddingHorizontal: 8,
  },
});
