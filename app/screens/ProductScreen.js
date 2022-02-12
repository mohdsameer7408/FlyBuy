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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import TouchableComponent from "../components/TouchableComponent";

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
          resizeMode="cover"
          source={{
            uri: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productScreenContainer: {
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
    width: 160,
    height: 140,
    borderRadius: 12,
  },
});
