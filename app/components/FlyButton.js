import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyTextBold from "./FlyTextBold";
import TouchableComponent from "./TouchableComponent";

const FlyButton = ({
  children,
  onButtonPress,
  containerStyle,
  buttonColor,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableComponent
      containerStyle={{
        ...styles.flyButton,
        ...containerStyle,
      }}
      wrapperStyle={{
        ...styles.flyButtonWrapper,
        backgroundColor: buttonColor,
      }}
      onPress={onButtonPress}
    >
      <FlyTextBold>{children}</FlyTextBold>
    </TouchableComponent>
  );
};

export default FlyButton;

const styles = StyleSheet.create({
  flyButton: {
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  flyButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
