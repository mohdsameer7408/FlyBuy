import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import FlyText from "../components/FlyText";
import FlyTextBold from "../components/FlyTextBold";

const DrawerContent = (props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.drawer}>
      <View style={styles.headerContainer}>
        <View
          style={{
            ...styles.drawerHeader,
            backgroundColor: colors.button,
          }}
        />
        <Image
          style={{
            ...styles.profilePicture,
            backgroundColor: colors.background,
          }}
          resizeMode="contain"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
          }}
        />
        <View
          style={{
            ...styles.headerBottom,
            backgroundColor: colors.button,
          }}
        >
          <View
            style={{
              ...styles.headerBottomWrapper,
              backgroundColor: colors.card,
            }}
          >
            <FlyTextBold style={styles.userName}>Elka Rosewood</FlyTextBold>
            <FlyText>elkars@gmail.com</FlyText>
          </View>
        </View>
      </View>
      <View style={styles.drawerItems}>
        <DrawerContentScrollView style={{ marginTop: -40 }}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
  },
  drawerHeader: {
    width: "100%",
    height: 150,
    borderBottomRightRadius: 60,
  },
  profilePicture: {
    zIndex: 1,
    position: "absolute",
    bottom: 116,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerBottom: {
    width: "100%",
    height: 150,
  },
  headerBottomWrapper: {
    height: "100%",
    borderTopLeftRadius: 60,
    alignItems: "center",
    paddingTop: 60,
  },
  userName: {
    fontSize: 16,
    marginBottom: 10,
  },
  drawerItems: {
    width: "100%",
    flex: 1,
    marginTop: -20,
  },
});
