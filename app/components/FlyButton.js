import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyTextBold from "./FlyTextBold";
import TouchableComponent from "./TouchableComponent";

const FlyButton = ({ children, onButtonPress, style }) => {
  const { colors } = useTheme();

  return (
    <TouchableComponent
      containerStyle={{
        ...styles.flyButton,
        ...style,
        shadowColor: colors.border,
      }}
      wrapperStyle={styles.flyButtonWrapper}
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
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 8,
  },
  flyButtonWrapper: {},
});
