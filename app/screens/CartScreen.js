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
});
