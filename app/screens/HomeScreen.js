import React from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";
import { signOutAsync } from "../features/authSlice";
import TouchableComponent from "../components/TouchableComponent";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await dispatch(signOutAsync());
    } catch (error) {
      Alert.alert("Sign Out Error", "Something went wrong!");
    }
  };

  return (
    <View style={styles.homeScreen}>
      <View style={styles.header}>
        <TouchableComponent
          containerStyle={styles.iconContainer}
          wrapperStyle={{
            ...styles.iconWrapper,
            backgroundColor: colors.border,
          }}
        >
          <Ionicons name="grid-outline" size={26} color={colors.text} />
        </TouchableComponent>
        <TouchableComponent
          containerStyle={styles.iconContainer}
          wrapperStyle={{
            ...styles.iconWrapper,
            backgroundColor: colors.border,
          }}
        >
          <EvilIcons name="cart" size={26} color={colors.text} />
        </TouchableComponent>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    width,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
