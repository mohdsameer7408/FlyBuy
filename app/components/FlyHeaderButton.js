import React from "react";
import { useTheme } from "@react-navigation/native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const FlyHeaderButton = (props) => {
  const { colors } = useTheme();

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={colors.text}
      style={{ backgroundColor: colors.border, height: 44, borderRadius: 12 }}
    />
  );
};

export default FlyHeaderButton;
