import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";

import FlyText from "../components/FlyText";
import TouchableComponent from "../components/TouchableComponent";
import FlyTextBold from "../components/FlyTextBold";
import Product from "../components/Product";
import ProductCard from "../components/ProductCard";

const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ScrollView contentContainerStyle={styles.homeScreen}>
        <View style={styles.header}>
          <TouchableComponent
            containerStyle={styles.iconContainer}
            wrapperStyle={{
              ...styles.iconWrapper,
              backgroundColor: colors.border,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <SimpleLineIcons name="grid" size={22} color={colors.text} />
          </TouchableComponent>
          <TouchableComponent
            containerStyle={styles.iconContainer}
            wrapperStyle={{
              ...styles.iconWrapper,
              backgroundColor: colors.border,
            }}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <EvilIcons name="cart" size={24} color={colors.text} />
          </TouchableComponent>
        </View>
        <View style={styles.appDetails}>
          <FlyTextBold style={styles.title}>Fly Buy</FlyTextBold>
          <FlyText style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            est!
          </FlyText>
        </View>
        <Image
          style={styles.trendingImage}
          source={{
            uri: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          resizeMode="cover"
        />
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <FlyTextBold style={styles.description}>Most Popular</FlyTextBold>
            <FlyTextBold>See all</FlyTextBold>
          </View>
          <FlatList
            style={styles.productsList}
            data={Array(10).fill()}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
            renderItem={() => <Product navigation={navigation} />}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <FlyTextBold style={styles.description}>
              Top of the week
            </FlyTextBold>
            <FlyTextBold>See all</FlyTextBold>
          </View>
          <View style={styles.productsListVertial}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <ProductCard key={index} navigation={navigation} />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  homeScreen: {
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
  appDetails: {
    width: width * 0.9,
    marginVertical: 10,
    paddingRight: width * 0.1,
  },
  title: {
    fontSize: 32,
    marginBottom: 14,
  },
  description: {
    fontSize: 18,
  },
  trendingImage: {
    width: width * 0.9,
    height: 140,
    borderRadius: 12,
    marginVertical: 20,
  },
  section: {
    width: width * 0.9,
    marginVertical: 20,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  productsList: {
    overflow: "visible",
    marginTop: 20,
  },
  productsListVertial: {
    marginTop: -10,
  },
  itemSeperator: {
    width: 20,
    height: "100%",
  },
});
