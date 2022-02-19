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
import FlyButton from "../components/FlyButton";

const { width } = Dimensions.get("window");

const CartScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.cartScreenContainer}>
      <ScrollView
        contentContainerStyle={styles.cartScreen}
        showsVerticalScrollIndicator={false}
      >
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
          {Array(5)
            .fill()
            .map((_, index) => (
              <Order key={index} />
            ))}
        </View>
        <View
          style={{ ...styles.horizontalLine, borderColor: colors.border }}
        />
      </ScrollView>
      <View style={styles.cartBottom}>
        <View style={styles.subtotalContainer}>
          <FlyTextBold
            style={{ ...styles.orderTotal, color: colors.placeholder }}
          >
            Subtotal
          </FlyTextBold>
          <FlyTextBold
            style={{ ...styles.orderTotal, color: colors.placeholder }}
          >
            $ 11.82
          </FlyTextBold>
        </View>
        <View style={styles.subtotalContainer}>
          <FlyTextBold
            style={{ ...styles.orderTotal, color: colors.placeholder }}
          >
            Delivery Charges
          </FlyTextBold>
          <FlyTextBold
            style={{ ...styles.orderTotal, color: colors.placeholder }}
          >
            $ 3.29
          </FlyTextBold>
        </View>
        <View style={styles.subtotalContainer}>
          <FlyTextBold style={styles.cartTotal}>Total Price</FlyTextBold>
          <FlyTextBold style={styles.cartTotal}>$ 15.11</FlyTextBold>
        </View>
        <FlyButton
          containerStyle={styles.orderButton}
          buttonColor={colors.button}
          textStyle={styles.orderButtonText}
          onButtonPress={() => {}}
        >
          Order Now
        </FlyButton>
      </View>
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
  horizontalLine: {
    width: width * 0.9,
    borderWidth: 1,
  },
  cartBottom: {
    alignSelf: "center",
    marginTop: 20,
  },
  subtotalContainer: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  orderTotal: {
    fontSize: 16,
  },
  cartTotal: {
    fontSize: 18,
  },
  orderButton: {
    width: width * 0.9,
    height: 64,
    marginTop: 8,
    borderRadius: 12,
  },
  orderButtonText: {
    fontSize: 20,
  },
});
