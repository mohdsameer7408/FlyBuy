import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const FlyInput = ({ placeholder, password }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ ...styles.input, color: colors.text }}
        secureTextEntry={password}
        placeholderTextColor="#888"
        placeholder={placeholder}
      />
      {password && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => console.log("password")}
        >
          <Ionicons name="eye-outline" color="#333" size={18} />
        </TouchableOpacity>
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
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});
