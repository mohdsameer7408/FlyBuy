import React, { useCallback } from "react";
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

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const onInputChange = useCallback((id, value, isValid) => {}, []);

  return (
    <ScrollView contentContainerStyle={styles.registerScreen}>
      <TouchableComponent
        containerStyle={styles.backButton}
        wrapperStyle={styles.backButtonWrapper}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" color={colors.text} size={28} />
      </TouchableComponent>
      <FlyTextBold style={{ ...styles.title, marginTop: 20 }}>
        Let's Register you up.
      </FlyTextBold>
      <FlyText style={styles.title}>
        Welcome to Fly Buy. {"\n"}Shop on your phone!
      </FlyText>
      <View style={styles.form}>
        <FlyInput placeholder="Name" onInputChange={onInputChange} required />
        <FlyInput
          placeholder="Phone, email or usename"
          onInputChange={onInputChange}
          email
          required
        />
        <FlyInput
          placeholder="password"
          password
          onInputChange={onInputChange}
          required
        />
      </View>
      <View style={styles.bottomContainer}>
        <FlyText style={{ ...styles.loginText, color: colors.placeholder }}>
          Have an account?
          <FlyTextBold onPress={() => navigation.navigate("LoginScreen")}>
            {" "}
            Sign In
          </FlyTextBold>
        </FlyText>
        <FlyButton
          containerStyle={styles.registerButton}
          buttonColor={colors.text}
          textStyle={{ color: colors.background }}
        >
          Register
        </FlyButton>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
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
  loginText: {
    marginBottom: 20,
    fontSize: 16,
  },
  registerButton: {
    width: width * 0.84,
    height: 50,
    borderRadius: 16,
  },
});
