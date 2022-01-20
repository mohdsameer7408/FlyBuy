import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyText from "./FlyText";
import FlyTextBold from "./FlyTextBold";
import FlyButton from "./FlyButton";

const Product = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={{
        ...styles.productContainer,
        backgroundColor: colors.card,
      }}
      onPress={() => navigation.navigate("ProductScreen")}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
        }}
      />
      <FlyText style={styles.title}>Pizza</FlyText>
      <FlyTextBold style={styles.price}>$ 3.14</FlyTextBold>
      <FlyButton
        containerStyle={styles.addButton}
        textStyle={styles.buttonText}
        buttonColor={colors.button}
        onButtonPress={() => {}}
      >
        +
      </FlyButton>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    width: 150,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
    paddingTop: 80,
    marginTop: 40,
  },
  image: {
    position: "absolute",
    top: -40,
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 28,
    marginVertical: 12,
  },
  addButton: {
    width: "100%",
    height: 40,
  },
  buttonText: {
    fontSize: 26,
    color: "#fff",
  },
});
