import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";
import { signOutAsync } from "../features/authSlice";

const HomeScreen = () => {
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
      <FlyText>Home Screen</FlyText>
      <FlyButton containerStyle={styles.signOutButton} onButtonPress={signOut}>
        Sign Out
      </FlyButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutButton: {
    width: 100,
    height: 30,
  },
});
