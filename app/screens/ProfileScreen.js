import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.profileScreen}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
