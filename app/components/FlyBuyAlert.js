import React from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyTextBold from "./FlyTextBold";
import FlyText from "./FlyText";
import FlyButton from "./FlyButton";

const { width } = Dimensions.get("window");

const FlyBuyAlert = ({
  title,
  message,
  buttons,
  isAlertOpened,
  closeAlert,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      visible={isAlertOpened}
      statusBarTranslucent
      animationType="fade"
      transparent
    >
      <Pressable style={styles.alertContainer} onPress={closeAlert}>
        <Pressable
          style={{ ...styles.alert, backgroundColor: colors.background }}
          onPress={() => {}}
        >
          <View style={styles.alertDetails}>
            <FlyTextBold style={styles.title}>{title}</FlyTextBold>
            <FlyText style={{ ...styles.message, color: colors.placeholder }}>
              {message}
            </FlyText>
          </View>
          <View style={styles.alertButtons}>
            {buttons ? (
              buttons?.map(({ text, onPress, type }, index) => (
                <FlyButton
                  key={index}
                  containerStyle={{
                    ...styles.button,
                    borderColor: colors.border,
                  }}
                  buttonColor={colors.background}
                  onButtonPress={onPress}
                  textStyle={{
                    color: type
                      ? type === "primary"
                        ? colors.primary
                        : colors.error
                      : colors.text,
                  }}
                >
                  {text}
                </FlyButton>
              ))
            ) : (
              <FlyButton
                containerStyle={{
                  ...styles.button,
                  borderColor: colors.border,
                }}
                buttonColor={colors.background}
                onButtonPress={closeAlert}
                textStyle={{ color: colors.primary }}
              >
                OK
              </FlyButton>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default FlyBuyAlert;

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0, 0, 0.4)",
  },
  alert: {
    width: width * 0.6,
    borderRadius: 12,
    overflow: "hidden",
  },
  alertDetails: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 21,
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    textAlign: "center",
  },
  alertButtons: {
    width: "100%",
    marginTop: 28,
  },
  button: {
    width: "100%",
    height: 50,
    borderTopWidth: 0.4,
  },
});
