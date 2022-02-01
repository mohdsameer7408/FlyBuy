import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyText from "./FlyText";
import FlyTextBold from "./FlyTextBold";
import FlyButton from "./FlyButton";

const ProductCard = ({ navigation }) => {
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
      <View style={styles.productDetails}>
        <FlyText style={styles.title}>Pizza</FlyText>
        <FlyTextBold style={styles.price}>$ 3.14</FlyTextBold>
        <FlyButton
          containerStyle={styles.addButton}
          textStyle={styles.buttonText}
          buttonColor={colors.button}
          onButtonPress={() => {}}
        >
          Add to cart
        </FlyButton>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  productDetails: {
    flex: 1,
    marginLeft: 20,
    // alignItems: "center",
  },
  title: {
    fontSize: 20,
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
    fontSize: 18,
    color: "#fff",
  },
});
