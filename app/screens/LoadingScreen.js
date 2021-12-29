import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const LoadingScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size="large" color={colors.text} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
