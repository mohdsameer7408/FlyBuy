import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import TouchableComponent from "../components/TouchableComponent";
import FlyTextBold from "../components/FlyTextBold";
import Order from "../components/Order";

const { width } = Dimensions.get("window");

const CartScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.cartScreen}>
      <ScrollView contentContainerStyle={styles.cartScreenContainer}>
        <View style={styles.header}>
          <TouchableComponent
            containerStyle={styles.iconContainer}
            wrapperStyle={{
              ...styles.iconWrapper,
              backgroundColor: colors.border,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color={colors.text} />
          </TouchableComponent>
          <FlyTextBold style={styles.headerTitle}>My Orders</FlyTextBold>
        </View>
        <View
          style={{
            ...styles.addressContainer,
            backgroundColor: colors.backgroundFilter,
          }}
        >
          <Ionicons name="location-outline" size={26} color={colors.text} />
          <View style={styles.addressData}>
            <FlyTextBold style={styles.address}>Delivery Address</FlyTextBold>
            <FlyTextBold style={styles.address}>
              Central Park, New York
            </FlyTextBold>
          </View>
        </View>
        <View style={styles.orderItems}>
          {Array(4)
            .fill()
            .map((_, index) => (
              <Order key={index} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreenContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  cartScreen: {
    paddingTop: 10,
    alignItems: "center",
  },
  header: {
    width: width * 0.9,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 26,
  },
  addressContainer: {
    width: width * 0.9,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: width * 0.05,
  },
  addressData: {
    marginLeft: 20,
    height: 50,
    justifyContent: "space-between",
  },
  address: {
    fontSize: 17,
  },
  orderItems: {
    width: width * 0.9,
    marginBottom: 20,
  },
});
