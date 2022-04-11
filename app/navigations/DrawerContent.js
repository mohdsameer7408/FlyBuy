import React, { useState } from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { signOutAsync } from "../features/authSlice";
import FlyText from "../components/FlyText";
import FlyTextBold from "../components/FlyTextBold";
import TouchableComponent from "../components/TouchableComponent";
import FlyBuyAlert from "../components/FlyBuyAlert";
import Card from "../components/Card";

const DrawerContent = (props) => {
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await dispatch(signOutAsync());
    } catch (error) {
      console.log(error);
      setIsAlertOpened(true);
    }
  };

  return (
    <View style={styles.drawer}>
      <View style={styles.headerContainer}>
        <View
          style={{
            ...styles.drawerHeader,
            backgroundColor: colors.button,
          }}
        />
        <Card
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
        </Card>
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
            <FlyText style={{ color: colors.placeholder }}>
              elkars@gmail.com
            </FlyText>
          </View>
        </View>
      </View>
      <View style={styles.drawerItems}>
        <DrawerContentScrollView style={{ marginTop: -40 }}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={{ ...styles.drawerBottom, borderColor: colors.background }}>
        <TouchableComponent
          containerStyle={styles.drawerItem}
          wrapperStyle={styles.drawerItemWrapper}
          onPress={logoutHandler}
        >
          <MaterialCommunityIcons name="logout" color={colors.text} size={24} />
          <FlyText style={styles.logoutText}>Logout</FlyText>
        </TouchableComponent>
      </View>
      <FlyBuyAlert
        isAlertOpened={isAlertOpened}
        closeAlert={() => setIsAlertOpened(false)}
        title="Error Signing Out"
        message="Try signing out after sometime!"
      />
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
    height: Platform.OS === "ios" ? 150 : 100,
    borderBottomRightRadius: 60,
  },
  imageContainer: {
    zIndex: 2,
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
    borderTopWidth: 1,
    paddingTop: 8,
  },
  drawerItem: {
    width: "100%",
    height: 50,
    marginBottom: 8,
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
