import React from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";

import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";
import { signOutAsync } from "../features/authSlice";
import TouchableComponent from "../components/TouchableComponent";
import FlyTextBold from "../components/FlyTextBold";

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
          <SimpleLineIcons name="grid" size={22} color={colors.text} />
        </TouchableComponent>
        <TouchableComponent
          containerStyle={styles.iconContainer}
          wrapperStyle={{
            ...styles.iconWrapper,
            backgroundColor: colors.border,
          }}
        >
          <EvilIcons name="cart" size={24} color={colors.text} />
        </TouchableComponent>
      </View>
      <View style={styles.appDetails}>
        <FlyTextBold style={styles.title}>Fly Buy</FlyTextBold>
        <FlyText style={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est!
        </FlyText>
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
  appDetails: {
    width,
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: width * 0.2,
  },
  title: {
    fontSize: 32,
    marginBottom: 14,
  },
  description: {
    fontSize: 18,
  },
});
