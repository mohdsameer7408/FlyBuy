import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import TouchableComponent from "../components/TouchableComponent";
import FlyText from "../components/FlyText";
import FlyTextBold from "../components/FlyTextBold";
import FlyButton from "../components/FlyButton";
import FlyInput from "../components/FlyInput";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.loginScreen}>
      <TouchableComponent
        containerStyle={styles.backButton}
        wrapperStyle={styles.backButtonWrapper}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" color={colors.text} size={28} />
      </TouchableComponent>
      <FlyTextBold style={{ ...styles.title, marginTop: 20 }}>
        Let's sign you in.
      </FlyTextBold>
      <FlyText style={styles.title}>
        Welcome back. {"\n"}You have been missed!
      </FlyText>
      <View style={styles.form}>
        <FlyInput placeholder="Phone, email or usename" />
        <FlyInput placeholder="password" password />
      </View>
      <View style={styles.bottomContainer}>
        <FlyText style={styles.registerText}>
          Don't have an account?
          <FlyTextBold onPress={() => navigation.navigate("RegisterScreen")}>
            {" "}
            Register
          </FlyTextBold>
        </FlyText>
        <FlyButton
          containerStyle={styles.loginButton}
          buttonColor={colors.text}
          textStyle={{ color: colors.background }}
        >
          Sign In
        </FlyButton>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    minHeight: height,
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 10,
    paddingHorizontal: width * 0.07,
  },
  backButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  backButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 12,
  },
  form: {
    width: width * 0.84,
    marginTop: height * 0.08,
  },
  bottomContainer: {
    // position: "absolute",
    // bottom: 30,
    // flex: 1,
    flex: 1,
    width: width * 0.84,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registerText: {
    color: "#888",
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: width * 0.84,
    height: 50,
    borderRadius: 16,
  },
});
