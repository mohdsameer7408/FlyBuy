import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Dimensions,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import FlyText from "./FlyText";
import TouchableComponent from "./TouchableComponent";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const FlySearch = ({ isSearchOpened, closeSearch }) => {
  const { colors } = useTheme();

  return (
    <Modal
      visible={isSearchOpened}
      statusBarTranslucent
      transparent
      animationType="fade"
    >
      <Pressable style={styles.searchModal} onPress={closeSearch}>
        <Pressable
          style={{
            ...styles.searchContainer,
          }}
          onPress={() => {}}
        >
          <View style={styles.searchHeader}>
            <TouchableComponent
              containerStyle={styles.iconContainer}
              wrapperStyle={{
                ...styles.iconWrapper,
                backgroundColor: colors.border,
              }}
              onPress={closeSearch}
            >
              <Ionicons name="chevron-back" size={22} color={colors.text} />
            </TouchableComponent>
            <TextInput
              style={{
                ...styles.search,
                backgroundColor: colors.background,
                color: colors.text,
              }}
              autoCapitalize="none"
              autoFocus
              placeholder="Search..."
            />
          </View>
          {Array(3)
            .fill()
            .map((_, index) => (
              <View
                key={index}
                style={{
                  ...styles.searchReults,
                  backgroundColor: colors.background,
                }}
              >
                <FlyText>Trending</FlyText>
              </View>
            ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default FlySearch;

const styles = StyleSheet.create({
  searchModal: {
    flex: 1,
    width,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + Platform.OS === "android" ? 30 : 60,
  },
  searchContainer: {
    width: width * 0.93,
    height: 500,
    borderRadius: 12,
  },
  searchHeader: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
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
  search: {
    width: width * 0.93 - 60,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  searchReults: {
    width: width * 0.93,
    height: 50,
    borderRadius: 12,
    marginBottom: 8,
    paddingLeft: 12,
    justifyContent: "center",
  },
});
