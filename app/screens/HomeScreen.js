import React from "react";
import { Alert, Dimensions, StyleSheet, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";

import { signOutAsync } from "../features/authSlice";
import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";
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
      <Image
        style={styles.trendingImage}
        source={{
          uri: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  header: {
    width: width * 0.9,
    paddingVertical: 20,
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
    width: width * 0.9,
    marginVertical: 10,
    paddingRight: width * 0.1,
  },
  title: {
    fontSize: 32,
    marginBottom: 14,
  },
  description: {
    fontSize: 18,
  },
  trendingImage: {
    width: width * 0.9,
    height: 140,
    borderRadius: 12,
    marginVertical: 20,
  },
});
