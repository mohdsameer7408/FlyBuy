import React, { useReducer, useCallback, useState } from "react";
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
import { signUpAsync } from "../features/authSlice";
import FlyBuyAlert from "../components/FlyBuyAlert";

const { width, height } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [{ values, validities, isFormValid }, dispatchFormState] = useReducer(
    formReducer,
    {
      values: {
        userName: "",
        email: "",
        password: "",
      },
      validities: {
        userName: false,
        email: false,
        password: false,
      },
      isFormValid: false,
    }
  );
  const [isRegistering, setIsRegistering] = useState(false);
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

  const onRegisterHandler = useCallback(async () => {
    if (!isFormValid) {
      setAlertTitle("Insufficient Data!");
      setAlertMessage("Check for your invalid data.");
      setIsAlertOpened(true);
      return;
    }

    try {
      setIsRegistering(true);
      await dispatch(signUpAsync(values));
    } catch (error) {
      setIsRegistering(false);
      setAlertTitle("Registration Error");
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
    setIsRegistering,
  ]);

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
        <FlyInput
          id="userName"
          placeholder="User Name"
          required
          onInputChange={onInputChange}
          initialValue={values.userName}
          initiallyValid={validities.userName}
        />
        <FlyInput
          id="email"
          placeholder="Phone, email or usename"
          email
          required
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
        <FlyText style={{ ...styles.loginText, color: colors.placeholder }}>
          Have an account?
          <FlyTextBold onPress={() => navigation.navigate("LoginScreen")}>
            {"  "}
            Sign In
          </FlyTextBold>
        </FlyText>
        <FlyButton
          containerStyle={styles.registerButton}
          buttonColor={colors.text}
          textStyle={{ color: colors.background }}
          onButtonPress={onRegisterHandler}
          disabled={isRegistering}
        >
          {isRegistering ? "Signing Up..." : "Register"}
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
