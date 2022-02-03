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
      <View style={styles.cardLeftContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
        />
        <FlyText style={styles.rating}>
          {Array(5)
            .fill("⭐")
            .map((star) => star)}
        </FlyText>
      </View>
      <View style={styles.productDetails}>
        <FlyText style={styles.title}>IPhone 13</FlyText>
        <FlyText style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, illo?
        </FlyText>
        <FlyTextBold style={styles.price}>$ 999.14</FlyTextBold>
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
  cardLeftContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },
  rating: {
    fontSize: 18,
  },
  productDetails: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
  },
  description: {
    marginTop: 6,
    fontSize: 15,
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
