import React, { useCallback, useReducer, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import TouchableComponent from "../components/TouchableComponent";
import FlyText from "../components/FlyText";
import FlyTextBold from "../components/FlyTextBold";
import FlyButton from "../components/FlyButton";
import FlyInput from "../components/FlyInput";
import formReducer, { UPDATE_FORM } from "../features/formReducer";
import { signInAsync } from "../features/authSlice";
import FlyBuyAlert from "../components/FlyBuyAlert";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [{ values, validities, isFormValid }, dispatchFormState] = useReducer(
    formReducer,
    {
      values: {
        email: "",
        password: "",
      },
      validities: {
        email: false,
        password: false,
      },
      isFormValid: false,
    }
  );
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = useCallback(
    (id, value, isValid) => {
      dispatchFormState({
        type: UPDATE_FORM,
        payload: {
          id,
          value,
          isValid,
        },
      });
    },
    [dispatchFormState]
  );

  const onLoginHandler = useCallback(async () => {
    if (!isFormValid) {
      setAlertTitle("Insufficient Data!");
      setAlertMessage("Check for your invalid data.");
      setIsAlertOpened(true);
      return;
    }

    try {
      setIsSigningIn(true);
      await dispatch(signInAsync(values));
    } catch (error) {
      setIsSigningIn(false);
      setAlertTitle("Sign In Error");
      setAlertMessage(error.response.data);
      setIsAlertOpened(true);
    }
  }, [
    values,
    validities,
    isFormValid,
    dispatch,
    setAlertTitle,
    setAlertMessage,
    setIsAlertOpened,
    setIsSigningIn,
  ]);

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
        <FlyInput
          id="email"
          placeholder="Phone, email or usename"
          required
          email
          autoCapitalize="none"
          onInputChange={onInputChange}
          initialValue={values.email}
          initiallyValid={validities.email}
        />
        <FlyInput
          id="password"
          placeholder="password"
          password
          required
          minLength={4}
          onInputChange={onInputChange}
          initialValue={values.password}
          initiallyValid={validities.password}
        />
      </View>
      <View style={styles.bottomContainer}>
        <FlyText style={{ ...styles.registerText, color: colors.placeholder }}>
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
          onButtonPress={onLoginHandler}
          disabled={isSigningIn}
        >
          {isSigningIn ? "Logging In..." : "Sign In"}
        </FlyButton>
      </View>
      <FlyBuyAlert
        isAlertOpened={isAlertOpened}
        closeAlert={() => setIsAlertOpened(false)}
        title={alertTitle}
        message={alertMessage}
      />
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
    flex: 1,
    width: width * 0.84,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registerText: {
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: width * 0.84,
    height: 50,
    borderRadius: 16,
  },
});
