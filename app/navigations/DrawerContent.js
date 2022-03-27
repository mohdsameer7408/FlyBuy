import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import FlyText from "../components/FlyText";
import FlyTextBold from "../components/FlyTextBold";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TouchableComponent from "../components/TouchableComponent";

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
        <View
          style={{
            ...styles.imageContainer,
            backgroundColor: colors.background,
          }}
        >
          <Image
            style={styles.profilePicture}
            resizeMode="contain"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
            }}
          />
        </View>
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
      <View style={{ ...styles.drawerBottom, borderColor: colors.placeholder }}>
        <TouchableComponent
          containerStyle={styles.drawerItem}
          wrapperStyle={styles.drawerItemWrapper}
          onPress={() => {}}
        >
          <MaterialCommunityIcons name="logout" color={colors.text} size={26} />
          <FlyText style={styles.logoutText}>Logout</FlyText>
        </TouchableComponent>
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
  imageContainer: {
    zIndex: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 116,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profilePicture: {
    width: 80,
    height: 80,
  },
  headerBottom: {
    width: "100%",
    height: 150,
    zIndex: 0,
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
    marginTop: -10,
  },
  drawerBottom: {
    width: "100%",
    borderTopWidth: 0.2,
  },
  drawerItem: {
    width: "100%",
    height: 60,
  },
  drawerItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoutText: {
    marginLeft: 20,
    fontSize: 16,
  },
});
