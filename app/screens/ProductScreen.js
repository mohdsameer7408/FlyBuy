import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

import TouchableComponent from "../components/TouchableComponent";
import FlyTextBold from "../components/FlyTextBold";
import FlyText from "../components/FlyText";
import FlyButton from "../components/FlyButton";
import ProductCard from "../components/ProductCard";

const { width } = Dimensions.get("window");

const ProductScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.productScreenContainer}>
      <ScrollView contentContainerStyle={styles.productScreen}>
        <View style={styles.header}>
          <TouchableComponent
            containerStyle={styles.iconContainer}
            wrapperStyle={{
              ...styles.iconWrapper,
              backgroundColor: colors.border,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color={colors.text} />
          </TouchableComponent>
          <TouchableComponent
            containerStyle={styles.iconContainer}
            wrapperStyle={{
              ...styles.iconWrapper,
              backgroundColor: colors.border,
            }}
          >
            <MaterialIcons name="favorite" size={24} color={colors.error} />
          </TouchableComponent>
        </View>
        <Image
          style={styles.productImage}
          resizeMode="center"
          source={{
            uri: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
          }}
        />
        <View style={styles.productDetails}>
          <FlyTextBold style={styles.productTitle}>
            Onion and Corn Pizza
          </FlyTextBold>
          <FlyText style={styles.rating}>
            {Array(5)
              .fill("⭐")
              .map((star) => star)}
            {"   "}
            4.5 (302)
          </FlyText>
          <View style={styles.priceButtonContainer}>
            <FlyTextBold style={styles.price}>$ 4.54</FlyTextBold>
            <FlyButton
              containerStyle={styles.addToCart}
              buttonColor={colors.button}
              textStyle={styles.buttonText}
              onButtonPress={() => {}}
            >
              Add to cart
            </FlyButton>
          </View>
          <FlyText style={styles.productDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            excepturi quam voluptate ducimus odio quisquam ut ipsa neque officia
            laboriosam.
          </FlyText>
        </View>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <FlyTextBold style={styles.description}>
              Similar Products
            </FlyTextBold>
            <FlyTextBold>See all</FlyTextBold>
          </View>
          <View>
            {Array(3)
              .fill()
              .map((_, index) => (
                <ProductCard key={index} navigation={navigation} />
              ))}
          </View>
        </View>
      </ScrollView>
      <FlyButton
        containerStyle={styles.cartIconContainer}
        buttonColor={colors.button}
        onButtonPress={() => navigation.navigate("CartScreen")}
      >
        <FontAwesome5 name="shopping-bag" color={colors.text} size={24} />
      </FlyButton>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productScreenContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  productScreen: {
    paddingTop: 10,
    alignItems: "center",
  },
  header: {
    width: width * 0.9,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    marginVertical: 20,
    width: width * 0.8,
    height: 200,
    borderRadius: 12,
  },
  productDetails: {
    width: width * 0.9,
    marginVertical: 20,
  },
  productTitle: {
    fontSize: 23,
  },
  rating: {
    fontSize: 15,
    marginTop: 10,
  },
  priceButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    marginTop: 12,
  },
  addToCart: {
    width: 100,
    height: 40,
  },
  buttonText: {
    color: "#fff",
  },
  productDescription: {
    marginTop: 14,
    fontSize: 15,
    textAlign: "justify",
    marginBottom: 40,
  },
  section: {
    width: width * 0.9,
    marginBottom: 100,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cartIconContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 40,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  description: {
    fontSize: 18,
  },
});
