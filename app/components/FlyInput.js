import React, { useState, useReducer, useEffect } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const INPUT_CHANGE = "INPUT_CHANGE";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
        touched: true,
      };

    default:
      return state;
  }
};

const FlyInput = ({
  id,
  placeholder,
  password,
  email,
  initialValue,
  initiallyValid,
  required,
  min,
  max,
  minLength,
  onInputChange,
  ...rest
}) => {
  const [isPassowrdVisible, setIsPasswordVisible] = useState(false);
  const [isInputBlur, setIsInputBlur] = useState(false);
  const [{ value, isValid, touched }, dispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : "",
    isValid: initiallyValid ? initiallyValid : false,
    touched: false,
  });

  const { colors } = useTheme();

  useEffect(() => {
    onInputChange(id, value, isValid);
  }, [id, value, isValid, onInputChange]);

  const onInputChangeHandler = (text) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid = true;

    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (min !== null && +text < min) {
      isValid = false;
    }
    if (max !== null && +text > max) {
      isValid = false;
    }
    if (minLength !== null && text.length < minLength) {
      isValid = false;
    }

    dispatch({
      type: INPUT_CHANGE,
      payload: {
        value: text,
        isValid,
      },
    });
  };

  return (
    <View
      style={{
        ...styles.inputContainer,
        borderColor:
          isInputBlur && !isValid && touched ? colors.error : colors.border,
      }}
    >
      <TextInput
        {...rest}
        style={{ ...styles.input, color: colors.text }}
        secureTextEntry={password ? !isPassowrdVisible : false}
        placeholderTextColor={colors.placeholder}
        placeholder={placeholder}
        onBlur={() => setIsInputBlur(true)}
        value={value}
        onChangeText={onInputChangeHandler}
      />
      {password ? (
        <TouchableOpacity
          style={{ ...styles.iconContainer, borderColor: colors.border }}
          onPress={() => setIsPasswordVisible((prevState) => !prevState)}
        >
          <Ionicons
            name={`${isPassowrdVisible ? "eye-off-outline" : "eye-outline"}`}
            color={colors.border}
            size={18}
          />
        </TouchableOpacity>
      ) : (
        isValid && (
          <View style={styles.iconContainer}>
            <Ionicons
              name="checkmark-circle-outline"
              color={colors.success}
              size={18}
            />
          </View>
        )
      )}
    </View>
  );
};

export default FlyInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 60,
    marginBottom: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
